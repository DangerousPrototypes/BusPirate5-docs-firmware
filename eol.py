import os

# Define the caution block to be added
caution_block_old = """:::caution
This site is no longer maintained.

For up-to-date documentation, see the [latest version](https://docs.buspirate.com/).
:::
"""

caution_block = """

import OldSiteWarning from '/old-site-warning.md'

<OldSiteWarning/>

"""

def add_caution_to_files(directory):
    # Iterate through all files in the directory and its subdirectories
    for root, _, files in os.walk(directory):
        for file in files:
            # Process only .md and .mdx files
            if file.endswith(('.md', '.mdx')):
                file_path = os.path.join(root, file)
                
                # Read the file content
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if the caution block is already present
                if caution_block in content:
                    print(f"Skipping {file_path}, caution block already present.")
                    continue
                
                # Find the position of the front matter end (---)
                if content.startswith('---'):
                    front_matter_end = content.find('---', 3)  # Find the second occurrence of ---
                    if front_matter_end != -1:
                        # Find the first heading (#)
                        first_heading_start = content.find('#', front_matter_end + 3)
                        if first_heading_start != -1:
                            # Find the end of the first heading line
                            first_heading_end = content.find('\n', first_heading_start)
                            if first_heading_end != -1:
                                # Insert the caution block after the first heading
                                updated_content = (
                                    content[:first_heading_end + 1] + '\n' + caution_block + '\n\n' + content[first_heading_end + 1:]
                                )
                                
                                # Write the updated content back to the file
                                with open(file_path, 'w', encoding='utf-8') as f:
                                    f.write(updated_content)
                                
                                print(f"Updated {file_path}")
                            else:
                                print(f"Skipping {file_path}, no valid heading found.")
                        else:
                            print(f"Skipping {file_path}, no heading found after front matter.")
                    else:
                        print(f"Skipping {file_path}, invalid front matter.")
                else:
                    print(f"Skipping {file_path}, no front matter found.")

# Specify the directory containing the documentation
docs_directory = r'c:\bpfw-docs\docs'

# Run the script
add_caution_to_files(docs_directory)