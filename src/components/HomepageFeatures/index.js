import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    img: require('@site/static/img/1b.jpg').default,
    description: (
      <>
        Discover the simplicity of interfacing with electronic chips using the Bus Pirate! 
        With its user-friendly design and intuitive controls, even beginners can dive into the world of common protocols effortlessly. 
        Whether you're a hobbyist or a seasoned engineer, the Bus Pirate streamlines your interactions with electronic components, making complex tasks feel like a breeze. 
        Unleash your creativity and explore the possibilities with this straightforward, plug-and-play tool.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    img: require('@site/static/img/2b.jpg').default,
    description: (
      <>
      Say goodbye to unnecessary complexities and embrace efficiency with the Bus Pirate. 
      We understand that your time is valuable, which is why the Bus Pirate lets you focus on what truly matters: your projects. 
      By automating the mundane aspects of chip interfacing, this remarkable electronic tool liberates you from the nitty-gritty, enabling you to concentrate on innovation and problem-solving. 
      Maximize productivity, minimize hassle - the Bus Pirate is your key to unlocking the full potential of electronic experimentation.
      </>
    ),
  },
  {
    title: 'Powered by Open Source',
    img: require('@site/static/img/3b.jpg').default,
    description: (
      <>
      Join a thriving community of tech enthusiasts and benefit from the power of open-source with the Bus Pirate. 
      Built on the principles of collaboration and shared knowledge, the Bus Pirate empowers you with access to its underlying code, allowing you to modify and customize the tool to suit your unique needs. 
      Embrace the spirit of innovation, contribute to a vast network of developers, and take advantage of continuous updates and improvements. 
      The Bus Pirate embodies the true essence of open-source technology, providing you with a limitless world of possibilities.
      </>
    ),
  },
];

function Feature({title, description, img}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
