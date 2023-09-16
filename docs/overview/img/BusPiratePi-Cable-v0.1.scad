include <BOSL2/std.scad>
include <BOSL2/rounding.scad>

//version number
version="6a"; //version number
version_h=1; //depth of version number pocket

//epsilon value
eps=0.01;

//desired total length
total_l=150;

//connector lengths
tjc8_l=15.24;
dupont_l=14;
connector_l=tjc8_l; //which connector to use

//crimp info
crimp_pin_l=4.4; //pin cavity (no wire)
crimp_conductive_l=3.25; //crimp to bare wire
crimp_wire_l=2.35;  //crimp to wire coating
crimp_total_l=crimp_pin_l+crimp_conductive_l+crimp_wire_l;



wire_l=total_l-(connector_l+((crimp_pin_l)*2));
wire_d=1.7;
heatshrink_l=20;
echo(wire_l=wire_l);



module wire(wire_color, heatshrink_color, heatshrink_hide){
    translate([0,2.54/2,-eps]){
        rotate([0,90,0]){
            union(){
                difference(){
                    translate([0,0,(wire_l/2)+crimp_conductive_l]){ //crimp pin
                        color("Silver") cube(size=[1.7,1.6,crimp_pin_l], anchor=BOTTOM);
                    }
                    translate([0,0,(wire_l/2)+crimp_conductive_l]){
                        color("Silver") cube(size=[1.7-.18,1.6-.18,crimp_pin_l+eps], anchor=BOTTOM);
                    }           
                }
                translate([0,.3,(wire_l/2)]){//wire crimp
                    color("Silver") cube(size=[1.25,.68,crimp_conductive_l], anchor=BOTTOM);
                }
                translate([0,0,(wire_l/2)]){ //crimped wire
                    color("DarkOrange") cube(size=[1,.68,crimp_conductive_l], anchor=BOTTOM);
                }
                translate([0,0,((wire_l/2)-crimp_wire_l)]){ //crimp attachment to cable
                    color("Silver") cylinder(h=crimp_wire_l, d=wire_d+.2, anchor=BOTTOM , $fn=100);
                }    
                color(wire_color) cylinder(h=wire_l+eps, d=wire_d, anchor=CENTER, $fn=100);
                if(!heatshrink_hide){//heatshrink
                    translate([0,0,((wire_l/2)-(heatshrink_l))+crimp_pin_l+crimp_wire_l]){ 
                        color(heatshrink_color) cylinder(h=heatshrink_l, d=wire_d+.64, anchor=BOTTOM , $fn=100);
                    }
                }
                translate([0,0,-(wire_l/2)]){//opposite end connector
                    color("Black") cube(size=[2.54,crimp_conductive_l,connector_l], anchor=TOP);
                }                                   
            }
        }
    }
}

shrink_colors=["Red","Orange","Yellow","Green","Blue","Purple", "Brown","Grey","White","Black"];
wire_colors=["Red", "Grey","Grey","Grey","Grey","Grey","Grey","Grey","Grey","Black"];

module cable(first_red){
    for(i=[9:-1:0]){
        translate([0,2.54*i,0]){
            wire(wire_colors[9-i], shrink_colors[9-i], false);
            translate([total_l/2,0,0]){
                //color("Black") text(text=str(colors[9-i]), size=2, font = "Liberation Sans");
            }
        }         
    }
}

cable(true);

translate([-25,-15,0]){
    color("Black") text(text=str("250mm"), font = "Liberation Sans", $fn=100);
}
//translate([05,-3,0])color("Black") square(size=[total_l,1], center=true);


    center_d=2.4;
    center_l=1;
    pin_d=0.6;
    pin_l=9;
    dupontp_d=0.65;
    dupontp_l=6;
    dupontp_square_w=0.6;

module bbpin(dupont_pin_square){
    union(){
        translate([0,0,0]) cylinder(l=center_l,d=center_d, $fn=100, anchor=CENTER);
        translate([0,0,-center_l/2]) color("Red") cylinder(l=pin_l,d=pin_d, $fn=100, anchor=TOP);
        if(dupont_pin_square==true){
            translate([0,0,center_l/2]) color("Blue") cube(size=[dupontp_square_w,dupontp_square_w,dupontp_l], $fn=100, anchor=BOTTOM);
        }else{
            translate([0,0,center_l/2]) color("Blue") cylinder(l=dupontp_l,d=dupontp_d, $fn=100, anchor=BOTTOM);
        }
    }
}

 translate([(total_l/2)-2,(2.54/2),0]){
    //rotate([0,-90,0]) bbpin(true);
}

 translate([(total_l/2)-2,(2.54/2)+2.54,0]){
    //rotate([0,-90,0]) bbpin(false);
}
