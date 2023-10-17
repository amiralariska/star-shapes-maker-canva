import { addNativeElement } from "@canva/preview/design";
import { upload } from "@canva/asset";
import { DraggableImage } from "../components/draggable_image";
import starShapefill from "../assets/images/star-shape-fill.png"
import starShapefillwithstroke from "../assets/images/star-shape-fill-with-stroke.png"
import starShapeRosepinkColor from "../assets/images/star-shape-rose-pink-color.png"
import starShapeRosepinkStrokeColor from "../assets/images/star-shape-rose-pink-stroke-color.png"
import starShapeRedColor from "../assets/images/star-shape-red-color.png"
import starShapeRedStrokeColor from "../assets/images/star-shape-red-stroke-color.png"
import starShapeBlueColor from "../assets/images/star-shape-blue-color.png"
import starShapeBlueStrokeColor from "../assets/images/star-shape-blue-stroke-color.png"
import starShapeGreenColor from "../assets/images/star-shape-green-color.png"
import starShapeGreenStrokeColor from "../assets/images/star-shape-green-stroke-color.png"
import starShapeCyanColor from "../assets/images/star-shape-cyan-color.png"
import starShapeCyanStrokeColor from "../assets/images/star-shape-cyan-stroke-color.png"
import starShapeYellowColor from "../assets/images/star-shape-yellow-color.png"
import starShapeYellowStrokeColor from "../assets/images/star-shape-yellow-stroke-color.png"
// import { Checkbox } from "@canva/app-ui-kit";
import React, { useState } from "react";
import styles from "styles/components.css";
import imagelayoutstyles from "styles/imagelayout.css"
import maineditorstyles from "styles/maineditor.css"
import { PlusIcon } from "components/plusicon/PlusIcon";
import { ShapesIcon, ShapesIcon10, ShapesIcon11, ShapesIcon12, ShapesIcon13, ShapesIcon14, ShapesIcon2, ShapesIcon3, ShapesIcon4, ShapesIcon5, ShapesIcon6, ShapesIcon7, ShapesIcon8, ShapesIcon9 } from "components/shapesicon/ShapesIcon";
import { ColorPicker } from 'antd';
// import { Button } from "@canva/app-ui-kit";
// import { MainApp } from "components/main_app/mainapp";
// import { MainEditor } from "components/main_editor/maineditor";

export const App = () => {
  async function starshapefill() {
    const firstimportimage = await upload({
      type: "IMAGE",
      id: "starshapefill",
      mimeType: "image/png",
      url: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-fill.png",
      thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-fill.png"
    })
    await addNativeElement({
      type: "IMAGE",
      ref: firstimportimage.ref,
    });
  }
  async function starshapefillwithstroke() {
    const secondimportimage = await upload({
      type: "IMAGE",
      id: "starshapefillwithstroke",
      mimeType: "image/png",
      url: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-fill-with-stroke.png",
      thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-fill-with-stroke.png"
    })
    await addNativeElement({
      type: "IMAGE",
      ref: secondimportimage.ref,
    });
  }
  async function starshaperosepinkcolor() {
    const thirdimportimage = await upload({
      type: "IMAGE",
      id: "starshaperosepinkcolor",
      mimeType: "image/png",
      url: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-rose-pink-color.png",
      thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-rose-pink-color.png",
    })
    await addNativeElement({
      type: "IMAGE",
      ref: thirdimportimage.ref,
    });
  }
  async function starshaperedcolor() {
    const fourthimportimage = await upload({
      type: "IMAGE",
      id: "starshaperedcolor",
      mimeType: "image/png",
      url: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-red-color.png",
      thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-red-color.png",
    })
    await addNativeElement({
      type: "IMAGE",
      ref: fourthimportimage.ref,
    });
  }
  async function starshapebluecolor() {
    const fifthimportimage = await upload({
      type: "IMAGE",
      id: "starshapebluecolor",
      mimeType: "image/png",
      url: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-blue-color.png",
      thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-blue-color.png",
    })
    await addNativeElement({
      type: "IMAGE",
      ref: fifthimportimage.ref,
    });
  }
  async function starshapegreencolor() {
    const sixthimportimage = await upload({
      type: "IMAGE",
      id: "starshapegreencolor",
      mimeType: "image/png",
      url: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-green-color.png",
      thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-green-color.png",
    })
    await addNativeElement({
      type: "IMAGE",
      ref: sixthimportimage.ref,
    });
  }
  async function starshapecyancolor() {
    const seventhimportimage = await upload({
      type: "IMAGE",
      id: "starshapecyancolor",
      mimeType: "image/png",
      url: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-cyan-color.png",
      thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-cyan-color.png",
    })
    await addNativeElement({
      type: "IMAGE",
      ref: seventhimportimage.ref,
    });
  }
  async function starshapeyellowcolor() {
    const eighthimportimage = await upload({
      type: "IMAGE",
      id: "starshapeyellowcolor",
      mimeType: "image/png",
      url: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-yellow-color.png",
      thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-yellow-color.png",
    })
    await addNativeElement({
      type: "IMAGE",
      ref: eighthimportimage.ref,
    });
  }
  async function starshaperosepinkstrokecolor() {
    const ninethimportimage = await upload({
      type: "IMAGE",
      id: "starshaperosepinkstrokecolor",
      mimeType: "image/png",
      url: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-rose-pink-stroke-color.png",
      thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-rose-pink-stroke-color.png",
    })
    await addNativeElement({
      type: "IMAGE",
      ref: ninethimportimage.ref,
    });
  }
  async function starshaperedstrokecolor() {
    const tenthimportimage = await upload({
      type: "IMAGE",
      id: "starshaperedstrokecolor",
      mimeType: "image/png",
      url: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-red-stroke-color.png",
      thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-red-stroke-color.png",
    })
    await addNativeElement({
      type: "IMAGE",
      ref: tenthimportimage.ref,
    });
  }
  async function starshapebluestrokecolor() {
    const eleventhimportimage = await upload({
      type: "IMAGE",
      id: "starshapebluestrokecolor",
      mimeType: "image/png",
      url: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-blue-stroke-color.png",
      thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-blue-stroke-color.png",
    })
    await addNativeElement({
      type: "IMAGE",
      ref: eleventhimportimage.ref,
    });
  }
  async function starshapegreenstrokecolor() {
    const twelfthimportimage = await upload({
      type: "IMAGE",
      id: "starshapegreenstrokecolor",
      mimeType: "image/png",
      url: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-green-stroke-color.png",
      thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-green-stroke-color.png",
    })
    await addNativeElement({
      type: "IMAGE",
      ref: twelfthimportimage.ref,
    });
  }
  async function starshapecyanstrokecolor() {
    const thirteenthimportimage = await upload({
      type: "IMAGE",
      id: "starshapecyanstrokecolor",
      mimeType: "image/png",
      url: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-cyan-stroke-color.png",
      thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-cyan-stroke-color.png",
    })
    await addNativeElement({
      type: "IMAGE",
      ref: thirteenthimportimage.ref,
    });
  }
  async function starshapeyellowstrokecolor() {
    const fourteenthimportimage = await upload({
      type: "IMAGE",
      id: "starshapeyellowstrokecolor",
      mimeType: "image/png",
      url: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-yellow-stroke-color.png",
      thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/star-shapes-maker-canva/star-shapes-maker-canva/assets/images/star-shape-yellow-stroke-color.png",
    })
    await addNativeElement({
      type: "IMAGE",
      ref: fourteenthimportimage.ref,
    });
  }
  const [activeTab, setActiveTab] = useState(0);
  const [selectedbox, setSelectedBox] = useState(0);
  // const [selectedbox2, setSelectedBox2] = useState(1);
  // const [selectedbox3, setSelectedBox3] = useState(2);
  const [numbervalue, setnumberValue] = useState(8);
  const [color, setColor] = useState("#ffffff");
  const [activeColorPicker, setActiveColorPicker] = useState(false);
  const [strokecolor, setstrokeColor] = useState("#FF66C4");
  const [activeStrokeColorPicker, setActiveStrokeColorPicker] = useState(false);
  const colorlist = [
    {
      label: 'Fill',
      colors: [
        "white",
        "red",
        "blue",
        "#00ff00",
        "cyan",
        "yellow",
        "#FF66C4"
      ],
    }
  ]
  const strokecolorlist = [
    {
      label: 'Stroke',
      colors: [
        "#FF66C4",
        "white",
        "red",
        "blue",
        "#00ff00",
        "cyan",
        "yellow",
      ],
    }
  ]
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const min = 0;
  const max = 10;
  const handleChange = (event: any) => {
    setnumberValue(event.target.value);
  };
  return (
    <div className={styles.scrollContainer}>
      {/* Tabs */}
      <div className={styles.tabs}>
        <div className={activeTab === 0 ? styles.firsttabactive : styles.firsttab} onClick={() => handleTabClick(0)}>Design</div>
        <div className={activeTab === 1 ? styles.secondtabactive : styles.secondtab}  onClick={() => handleTabClick(1)}>Editor</div>
      </div>
      <div className={activeTab === 0 ? styles.mainappactive : styles.mainapp}>
        {/* Container */}
        <div className={styles.container}>
          <h1 className={styles.heading}>Star Shapes Maker</h1>
          <p className={styles.paragraph}>Add your star shape to your design</p>
          <p className={styles.middleparagraph}>or</p>
          <p className={styles.paragraph}>Drag your star shape to your design</p>
        </div>
        {/* Subtitle Section */}
        <p className={styles.paragraphlist}>Star Shape</p>
        {/* Grid Image View */}
        <div className={imagelayoutstyles.gridimage}>
          <div className={imagelayoutstyles.imagebutton}>
            <div className={imagelayoutstyles.images}>
              <DraggableImage className={imagelayoutstyles.firstimage} src={starShapefill} width={150} onClick={starshapefill} />
              <div className={imagelayoutstyles.topoption}>
                <button className={imagelayoutstyles.addtodesign} onClick={starshapefill}>
                  <PlusIcon />
                </button>
              </div>
              <div className={imagelayoutstyles.details}>
                <div className={imagelayoutstyles.customshapes}>
                  <ShapesIcon className={imagelayoutstyles.shapes} />
                  <span className={imagelayoutstyles.title}>Star Shape - Fill</span>
                </div>
              </div>
            </div>
          </div>
          <div className={imagelayoutstyles.imagebutton2}>
            <div className={imagelayoutstyles.images}>
              <DraggableImage className={imagelayoutstyles.secondimage} src={starShapefillwithstroke} width={150} onClick={starshapefillwithstroke} />
              <div className={imagelayoutstyles.topoption2}>
                <button className={imagelayoutstyles.addtodesign2} onClick={starshapefillwithstroke}>
                  <PlusIcon />
                </button>
              </div>
              <div className={imagelayoutstyles.details2}>
                <div className={imagelayoutstyles.customshapes2}>
                  <ShapesIcon2 className={imagelayoutstyles.shapes2} />
                  <span className={imagelayoutstyles.secondtitle}>Star Shape - Fill With Stroke</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Subtitle Section 2 */}
        <p className={styles.secondparagraphlist}>Star Shape - Color Variants</p>
        {/* Grid Image View 2 */}
        <div className={imagelayoutstyles.gridimage2}>
          <div className={imagelayoutstyles.imagebutton3}>
            <div className={imagelayoutstyles.images}>
              <DraggableImage className={imagelayoutstyles.thirdimage} src={starShapeRosepinkColor} width={150} onClick={starshaperosepinkcolor} />
              <div className={imagelayoutstyles.topoption3}>
                <button className={imagelayoutstyles.addtodesign3} onClick={starshaperosepinkcolor}>
                  <PlusIcon />
                </button>
              </div>
              <div className={imagelayoutstyles.details3}>
                <div className={imagelayoutstyles.customshapes3}>
                  <ShapesIcon3 className={imagelayoutstyles.shapes3} />
                  <span className={imagelayoutstyles.thirdtitle}>Star Shape - Rose Pink</span>
                </div>
              </div>
            </div>
          </div>
          <div className={imagelayoutstyles.imagebutton4}>
            <div className={imagelayoutstyles.images}>
              <DraggableImage className={imagelayoutstyles.fourthimage} src={starShapeRedColor} width={150} onClick={starshaperedcolor} />
              <div className={imagelayoutstyles.topoption4}>
                <button className={imagelayoutstyles.addtodesign4} onClick={starshaperedcolor}>
                  <PlusIcon />
                </button>
              </div>
              <div className={imagelayoutstyles.details4}>
                <div className={imagelayoutstyles.customshapes4}>
                  <ShapesIcon4 className={imagelayoutstyles.shapes4} />
                  <span className={imagelayoutstyles.fourthtitle}>Star Shape - Red</span>
                </div>
              </div>
            </div>
          </div>
          <div className={imagelayoutstyles.imagebutton5}>
            <div className={imagelayoutstyles.images}>
              <DraggableImage className={imagelayoutstyles.fifthimage} src={starShapeBlueColor} width={150} onClick={starshapebluecolor} />
              <div className={imagelayoutstyles.topoption5}>
                <button className={imagelayoutstyles.addtodesign5} onClick={starshapebluecolor}>
                  <PlusIcon />
                </button>
              </div>
              <div className={imagelayoutstyles.details5}>
                <div className={imagelayoutstyles.customshapes5}>
                  <ShapesIcon5 className={imagelayoutstyles.shapes5} />
                  <span className={imagelayoutstyles.fifthtitle}>Star Shape - Blue</span>
                </div>
              </div>
            </div>
          </div>
          <div className={imagelayoutstyles.imagebutton6}>
            <div className={imagelayoutstyles.images}>
              <DraggableImage className={imagelayoutstyles.sixthimage} src={starShapeGreenColor} width={150} onClick={starshapegreencolor} />
              <div className={imagelayoutstyles.topoption6}>
                <button className={imagelayoutstyles.addtodesign6} onClick={starshapegreencolor}>
                  <PlusIcon />
                </button>
              </div>
              <div className={imagelayoutstyles.details6}>
                <div className={imagelayoutstyles.customshapes6}>
                  <ShapesIcon6 className={imagelayoutstyles.shapes6} />
                  <span className={imagelayoutstyles.sixthtitle}>Star Shape - Green</span>
                </div>
              </div>
            </div>
          </div>
          <div className={imagelayoutstyles.imagebutton7}>
            <div className={imagelayoutstyles.images}>
              <DraggableImage className={imagelayoutstyles.seventhimage} src={starShapeCyanColor} width={150} onClick={starshapecyancolor} />
              <div className={imagelayoutstyles.topoption7}>
                <button className={imagelayoutstyles.addtodesign7} onClick={starshapecyancolor}>
                  <PlusIcon />
                </button>
              </div>
              <div className={imagelayoutstyles.details7}>
                <div className={imagelayoutstyles.customshapes7}>
                  <ShapesIcon7 className={imagelayoutstyles.shapes7} />
                  <span className={imagelayoutstyles.seventhtitle}>Star Shape - Cyan</span>
                </div>
              </div>
            </div>
          </div>
          <div className={imagelayoutstyles.imagebutton8}>
            <div className={imagelayoutstyles.images}>
              <DraggableImage className={imagelayoutstyles.eighthimage} src={starShapeYellowColor} width={150} onClick={starshapeyellowcolor} />
              <div className={imagelayoutstyles.topoption8}>
                <button className={imagelayoutstyles.addtodesign8} onClick={starshapeyellowcolor}>
                  <PlusIcon />
                </button>
              </div>
              <div className={imagelayoutstyles.details8}>
                <div className={imagelayoutstyles.customshapes8}>
                  <ShapesIcon8 className={imagelayoutstyles.shapes8} />
                  <span className={imagelayoutstyles.eighthtitle}>Star Shape - Yellow</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Subtitle Section 3 */}
        <p className={styles.thirdparagraphlist}>Star Shape - Stroke Color Variants</p>
        {/* Grid Image View 3 */}
        <div className={imagelayoutstyles.gridimage3}>
          <div className={imagelayoutstyles.imagebutton9}>
            <div className={imagelayoutstyles.images}>
              <DraggableImage className={imagelayoutstyles.ninethimage} src={starShapeRosepinkStrokeColor} width={150} onClick={starshaperosepinkstrokecolor} />
              <div className={imagelayoutstyles.topoption9}>
                <button className={imagelayoutstyles.addtodesign9} onClick={starshaperosepinkstrokecolor}>
                  <PlusIcon />
                </button>
              </div>
              <div className={imagelayoutstyles.details9}>
                <div className={imagelayoutstyles.customshapes9}>
                  <ShapesIcon9 className={imagelayoutstyles.shapes9} />
                  <span className={imagelayoutstyles.ninethtitle}>Star Shape - Rose Pink Stroke</span>
                </div>
              </div>
            </div>
          </div>
          <div className={imagelayoutstyles.imagebutton10}>
            <div className={imagelayoutstyles.images}>
              <DraggableImage className={imagelayoutstyles.tenthimage} src={starShapeRedStrokeColor} width={150} onClick={starshaperedstrokecolor} />
              <div className={imagelayoutstyles.topoption10}>
                <button className={imagelayoutstyles.addtodesign10} onClick={starshaperedstrokecolor}>
                  <PlusIcon />
                </button>
              </div>
              <div className={imagelayoutstyles.details10}>
                <div className={imagelayoutstyles.customshapes10}>
                  <ShapesIcon10 className={imagelayoutstyles.shapes10} />
                  <span className={imagelayoutstyles.tenthtitle}>Star Shape - Red Stroke</span>
                </div>
              </div>
            </div>
          </div>
          <div className={imagelayoutstyles.imagebutton11}>
            <div className={imagelayoutstyles.images}>
              <DraggableImage className={imagelayoutstyles.eleventhimage} src={starShapeBlueStrokeColor} width={150} onClick={starshapebluestrokecolor} />
              <div className={imagelayoutstyles.topoption11}>
                <button className={imagelayoutstyles.addtodesign11} onClick={starshapebluestrokecolor}>
                  <PlusIcon />
                </button>
              </div>
              <div className={imagelayoutstyles.details11}>
                <div className={imagelayoutstyles.customshapes11}>
                  <ShapesIcon11 className={imagelayoutstyles.shapes11} />
                  <span className={imagelayoutstyles.eleventhtitle}>Star Shape - Blue Stroke</span>
                </div>
              </div>
            </div>
          </div>
          <div className={imagelayoutstyles.imagebutton12}>
            <div className={imagelayoutstyles.images}>
              <DraggableImage className={imagelayoutstyles.twelfthimage} src={starShapeGreenStrokeColor} width={150} onClick={starshapegreenstrokecolor} />
              <div className={imagelayoutstyles.topoption12}>
                <button className={imagelayoutstyles.addtodesign12} onClick={starshapegreenstrokecolor}>
                  <PlusIcon />
                </button>
              </div>
              <div className={imagelayoutstyles.details12}>
                <div className={imagelayoutstyles.customshapes12}>
                  <ShapesIcon12 className={imagelayoutstyles.shapes12} />
                  <span className={imagelayoutstyles.twelfthtitle}>Star Shape - Green Stroke</span>
                </div>
              </div>
            </div>
          </div>
          <div className={imagelayoutstyles.imagebutton13}>
            <div className={imagelayoutstyles.images}>
              <DraggableImage className={imagelayoutstyles.thirteenthimage} src={starShapeCyanStrokeColor} width={150} onClick={starshapecyanstrokecolor} />
              <div className={imagelayoutstyles.topoption13}>
                <button className={imagelayoutstyles.addtodesign13} onClick={starshapecyanstrokecolor}>
                  <PlusIcon />
                </button>
              </div>
              <div className={imagelayoutstyles.details13}>
                <div className={imagelayoutstyles.customshapes13}>
                  <ShapesIcon13 className={imagelayoutstyles.shapes13} />
                  <span className={imagelayoutstyles.thirteenthtitle}>Star Shape - Cyan Stroke</span>
                </div>
              </div>
            </div>
          </div>
          <div className={imagelayoutstyles.imagebutton14}>
            <div className={imagelayoutstyles.images}>
              <DraggableImage className={imagelayoutstyles.fourteenthimage} src={starShapeYellowStrokeColor} width={150} onClick={starshapeyellowstrokecolor} />
              <div className={imagelayoutstyles.topoption14}>
                <button className={imagelayoutstyles.addtodesign14} onClick={starshapeyellowstrokecolor}>
                  <PlusIcon />
                </button>
              </div>
              <div className={imagelayoutstyles.details14}>
                <div className={imagelayoutstyles.customshapes14}>
                  <ShapesIcon14 className={imagelayoutstyles.shapes14} />
                  <span className={imagelayoutstyles.fourteenthtitle}>Star Shape - Yellow Stroke</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={activeTab === 1 ? maineditorstyles.maineditoractive : maineditorstyles.maineditor}>
        <div className={maineditorstyles.maineditorcontainer}>
          <svg className={maineditorstyles.starshape} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M432.448 256.016C432.448 247.286 441.38 238.036 440.203 229.672C438.943 221.089 427.792 214.724 425.354 206.583C422.917 198.297 428.828 186.901 425.281 179.13C421.661 171.286 409.104 168.328 404.453 161.151C399.724 153.896 402.234 141.318 396.552 134.88C390.865 128.37 378.01 129.031 371.437 123.411C364.937 117.786 363.755 105.057 356.443 100.396C349.203 95.7344 337.021 99.9531 329.115 96.401C321.286 92.849 316.557 80.9323 308.214 78.4896C300.016 76.125 289.526 83.599 280.885 82.3385C272.391 81.1563 264.417 71.0156 255.625 71.0156C246.833 71.0156 238.859 81.1563 230.437 82.3385C221.797 83.599 211.307 76.125 203.109 78.4896C194.766 80.9323 189.964 92.849 182.208 96.401C174.307 99.9531 162.12 95.8073 154.88 100.396C147.568 105.057 146.385 117.786 139.885 123.411C133.385 129.031 120.464 128.37 114.776 134.88C109.089 141.318 111.599 153.896 106.87 161.151C102.219 168.328 89.6614 171.286 86.0417 179.13C82.5 186.901 88.4062 198.224 85.9687 206.583C83.5312 214.724 72.3802 221.089 71.125 229.672C69.9427 238.036 78.8802 247.286 78.8802 256.016C78.8802 264.75 69.9427 274 71.125 282.359C72.3802 290.943 83.5312 297.307 85.9687 305.448C88.4062 313.74 82.5 325.135 86.0417 332.901C89.6614 340.745 102.219 343.708 106.87 350.885C111.599 358.135 109.089 370.719 114.776 377.156C120.464 383.667 133.312 383 139.885 388.625C146.385 394.25 147.568 406.979 154.88 411.641C162.12 416.302 174.307 412.083 182.208 415.635C190.036 419.188 194.766 431.099 203.109 433.542C211.307 435.911 221.797 428.438 230.437 429.693C238.859 430.88 246.833 441.016 255.625 441.016C264.417 441.016 272.391 430.88 280.812 429.693C289.453 428.438 299.943 435.911 308.141 433.542C316.484 431.099 321.286 419.188 329.042 415.635C336.943 412.083 349.13 416.229 356.37 411.641C363.682 406.979 364.865 394.25 371.365 388.625C377.865 383 390.786 383.667 396.474 377.156C402.161 370.719 399.651 358.135 404.38 350.885C409.031 343.708 421.589 340.745 425.208 332.901C428.75 325.135 422.844 313.813 425.281 305.448C427.719 297.307 438.87 290.943 440.125 282.359C441.38 274 432.448 264.75 432.448 256.016Z" fill={color} stroke={strokecolor} strokeWidth={numbervalue} />
          </svg>
          <div className={maineditorstyles.shapestyleheader}>
            <p className={maineditorstyles.paragraphlabel2}>Style</p>
          </div>
          <div className={maineditorstyles.shapestyle}>
            <div className={selectedbox === 0 ? maineditorstyles.shapeoptionactive : maineditorstyles.shapeoption} onClick={() =>{
              setSelectedBox(0)
              setColor("white")
              setstrokeColor("#FF66C4")
              setnumberValue(8)
            }}>
              <svg className={maineditorstyles.starshapeoptionicon} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M84.4625 50.0031C84.4625 48.2981 86.2071 46.4915 85.9772 44.8578C85.731 43.1814 83.5531 41.9383 83.077 40.3483C82.6009 38.7299 83.7555 36.5041 83.0627 34.9864C82.3557 33.4544 79.9031 32.8766 78.9947 31.4748C78.0711 30.0578 78.5614 27.6011 77.4516 26.3438C76.3407 25.0722 73.8302 25.2014 72.5464 24.1038C71.2768 23.0052 71.0459 20.519 69.6177 19.6086C68.2037 18.6981 65.8244 19.5221 64.2802 18.8283C62.7513 18.1346 61.8276 15.8071 60.1979 15.33C58.5968 14.8682 56.548 16.3279 54.8604 16.0817C53.2013 15.8508 51.6439 13.8702 49.9267 13.8702C48.2096 13.8702 46.6522 15.8508 45.0073 16.0817C43.3197 16.3279 41.2709 14.8682 39.6698 15.33C38.0402 15.8071 37.1022 18.1346 35.5876 18.8283C34.0444 19.5221 31.664 18.7124 30.25 19.6086C28.8218 20.519 28.5909 23.0052 27.3214 24.1038C26.0518 25.2014 23.528 25.0722 22.4172 26.3438C21.3063 27.6011 21.7967 30.0578 20.873 31.4748C19.9646 32.8766 17.512 33.4544 16.805 34.9864C16.1133 36.5041 17.2668 38.7156 16.7908 40.3483C16.3147 41.9383 14.1367 43.1814 13.8916 44.8578C13.6607 46.4915 15.4063 48.2981 15.4063 50.0031C15.4063 51.709 13.6607 53.5156 13.8916 55.1483C14.1367 56.8247 16.3147 58.0678 16.7908 59.6578C17.2668 61.2773 16.1133 63.503 16.805 65.0197C17.512 66.5517 19.9646 67.1305 20.873 68.5323C21.7967 69.9483 21.3063 72.406 22.4172 73.6633C23.528 74.9349 26.0376 74.8047 27.3214 75.9033C28.5909 77.002 28.8218 79.4881 30.25 80.3986C31.664 81.309 34.0444 80.485 35.5876 81.1788C37.1165 81.8726 38.0402 84.199 39.6698 84.6761C41.2709 85.139 43.3197 83.6792 45.0073 83.9244C46.6522 84.1563 48.2096 86.1359 49.9267 86.1359C51.6439 86.1359 53.2013 84.1563 54.8462 83.9244C56.5338 83.6792 58.5826 85.139 60.1837 84.6761C61.8133 84.199 62.7513 81.8726 64.2659 81.1788C65.8091 80.485 68.1895 81.2948 69.6035 80.3986C71.0317 79.4881 71.2626 77.002 72.5321 75.9033C73.8017 74.8047 76.3255 74.9349 77.4363 73.6633C78.5472 72.406 78.0568 69.9483 78.9805 68.5323C79.8889 67.1305 82.3415 66.5517 83.0485 65.0197C83.7402 63.503 82.5867 61.2915 83.0627 59.6578C83.5388 58.0678 85.7167 56.8247 85.9619 55.1483C86.2071 53.5156 84.4625 51.709 84.4625 50.0031Z" fill="white" stroke="#FF66C4" strokeWidth="2"/>
              </svg>
            </div>
            <div className={selectedbox === 1 ? maineditorstyles.shapeoption2active : maineditorstyles.shapeoption2} onClick={() => {
              setSelectedBox(1)
              setColor("white")
              setstrokeColor("#FF66C4")
              setnumberValue(0)
            }}>
              <svg className={maineditorstyles.starshapeoptionicon2} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M84.4625 50.0031C84.4625 48.2981 86.2071 46.4915 85.9772 44.8578C85.731 43.1814 83.5531 41.9383 83.077 40.3483C82.6009 38.7299 83.7555 36.5041 83.0627 34.9864C82.3557 33.4544 79.9031 32.8766 78.9947 31.4748C78.0711 30.0578 78.5614 27.6011 77.4516 26.3438C76.3407 25.0722 73.8302 25.2014 72.5464 24.1038C71.2768 23.0052 71.0459 20.519 69.6177 19.6086C68.2037 18.6981 65.8244 19.5221 64.2802 18.8283C62.7513 18.1346 61.8276 15.8071 60.1979 15.33C58.5968 14.8682 56.548 16.3279 54.8604 16.0817C53.2013 15.8508 51.6439 13.8702 49.9267 13.8702C48.2096 13.8702 46.6522 15.8508 45.0073 16.0817C43.3197 16.3279 41.2709 14.8682 39.6698 15.33C38.0402 15.8071 37.1022 18.1346 35.5876 18.8283C34.0444 19.5221 31.664 18.7124 30.25 19.6086C28.8218 20.519 28.5909 23.0052 27.3214 24.1038C26.0518 25.2014 23.528 25.0722 22.4172 26.3438C21.3063 27.6011 21.7967 30.0578 20.873 31.4748C19.9646 32.8766 17.512 33.4544 16.805 34.9864C16.1133 36.5041 17.2668 38.7156 16.7908 40.3483C16.3147 41.9383 14.1367 43.1814 13.8916 44.8578C13.6607 46.4915 15.4063 48.2981 15.4063 50.0031C15.4063 51.709 13.6607 53.5156 13.8916 55.1483C14.1367 56.8247 16.3147 58.0678 16.7908 59.6578C17.2668 61.2773 16.1133 63.503 16.805 65.0197C17.512 66.5517 19.9646 67.1305 20.873 68.5323C21.7967 69.9483 21.3063 72.406 22.4172 73.6633C23.528 74.9349 26.0376 74.8047 27.3214 75.9033C28.5909 77.002 28.8218 79.4881 30.25 80.3986C31.664 81.309 34.0444 80.485 35.5876 81.1788C37.1165 81.8726 38.0402 84.199 39.6698 84.6761C41.2709 85.139 43.3197 83.6792 45.0073 83.9244C46.6522 84.1563 48.2096 86.1359 49.9267 86.1359C51.6439 86.1359 53.2013 84.1563 54.8462 83.9244C56.5338 83.6792 58.5826 85.139 60.1837 84.6761C61.8133 84.199 62.7513 81.8726 64.2659 81.1788C65.8091 80.485 68.1895 81.2948 69.6035 80.3986C71.0317 79.4881 71.2626 77.002 72.5321 75.9033C73.8017 74.8047 76.3255 74.9349 77.4363 73.6633C78.5472 72.406 78.0568 69.9483 78.9805 68.5323C79.8889 67.1305 82.3415 66.5517 83.0485 65.0197C83.7402 63.503 82.5867 61.2915 83.0627 59.6578C83.5388 58.0678 85.7167 56.8247 85.9619 55.1483C86.2071 53.5156 84.4625 51.709 84.4625 50.0031Z" fill="white"/>
              </svg>
            </div>
            <div className={selectedbox === 2 ? maineditorstyles.shapeoption3active : maineditorstyles.shapeoption3} onClick={() => {
              setSelectedBox(2)
              setColor("transparent")
              setstrokeColor("#FF66C4")
              setnumberValue(8)
            }}>
              <svg className={maineditorstyles.starshapeoptionicon3} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M84.4625 50.0031C84.4625 48.2981 86.2071 46.4915 85.9772 44.8578C85.731 43.1814 83.5531 41.9383 83.077 40.3483C82.6009 38.7299 83.7555 36.5041 83.0627 34.9864C82.3557 33.4544 79.9031 32.8766 78.9947 31.4748C78.0711 30.0578 78.5614 27.6011 77.4516 26.3438C76.3407 25.0722 73.8302 25.2014 72.5464 24.1038C71.2768 23.0052 71.0459 20.519 69.6177 19.6086C68.2037 18.6981 65.8244 19.5221 64.2802 18.8283C62.7513 18.1346 61.8276 15.8071 60.1979 15.33C58.5968 14.8682 56.548 16.3279 54.8604 16.0817C53.2013 15.8508 51.6439 13.8702 49.9267 13.8702C48.2096 13.8702 46.6522 15.8508 45.0073 16.0817C43.3197 16.3279 41.2709 14.8682 39.6698 15.33C38.0402 15.8071 37.1022 18.1346 35.5876 18.8283C34.0444 19.5221 31.664 18.7124 30.25 19.6086C28.8218 20.519 28.5909 23.0052 27.3214 24.1038C26.0518 25.2014 23.528 25.0722 22.4172 26.3438C21.3063 27.6011 21.7967 30.0578 20.873 31.4748C19.9646 32.8766 17.512 33.4544 16.805 34.9864C16.1133 36.5041 17.2668 38.7156 16.7908 40.3483C16.3147 41.9383 14.1367 43.1814 13.8916 44.8578C13.6607 46.4915 15.4063 48.2981 15.4063 50.0031C15.4063 51.709 13.6607 53.5156 13.8916 55.1483C14.1367 56.8247 16.3147 58.0678 16.7908 59.6578C17.2668 61.2773 16.1133 63.503 16.805 65.0197C17.512 66.5517 19.9646 67.1305 20.873 68.5323C21.7967 69.9483 21.3063 72.406 22.4172 73.6633C23.528 74.9349 26.0376 74.8047 27.3214 75.9033C28.5909 77.002 28.8218 79.4881 30.25 80.3986C31.664 81.309 34.0444 80.485 35.5876 81.1788C37.1165 81.8726 38.0402 84.199 39.6698 84.6761C41.2709 85.139 43.3197 83.6792 45.0073 83.9244C46.6522 84.1563 48.2096 86.1359 49.9267 86.1359C51.6439 86.1359 53.2013 84.1563 54.8462 83.9244C56.5338 83.6792 58.5826 85.139 60.1837 84.6761C61.8133 84.199 62.7513 81.8726 64.2659 81.1788C65.8091 80.485 68.1895 81.2948 69.6035 80.3986C71.0317 79.4881 71.2626 77.002 72.5321 75.9033C73.8017 74.8047 76.3255 74.9349 77.4363 73.6633C78.5472 72.406 78.0568 69.9483 78.9805 68.5323C79.8889 67.1305 82.3415 66.5517 83.0485 65.0197C83.7402 63.503 82.5867 61.2915 83.0627 59.6578C83.5388 58.0678 85.7167 56.8247 85.9619 55.1483C86.2071 53.5156 84.4625 51.709 84.4625 50.0031Z" fill="transparent" stroke="#FF66C4" strokeWidth="2" />
              </svg>
            </div>
            <p className={maineditorstyles.stylenameparagraph}>Standard</p>
            <p className={maineditorstyles.stylenameparagraph}>Fill</p>
            <p className={maineditorstyles.stylenameparagraph}>Stroke</p>
          </div>
          <div className={selectedbox === 0 ? maineditorstyles.standardshapeoptionactive : maineditorstyles.standardshapeoption}>
            <div className={maineditorstyles.coloreditorheader}>
              <p className={maineditorstyles.paragraphlabel}>Color</p>
              <ColorPicker value={color} onChange={updatedColor => setColor(updatedColor.toHexString())} placement="top" presets={colorlist}>
                <button className={activeColorPicker ? maineditorstyles.coloractive : maineditorstyles.color} style={{background: color}} onClick={() => setActiveColorPicker(!activeColorPicker)}></button>
              </ColorPicker>
            </div>
            <div className={maineditorstyles.strokewidtheditorheader}>
              <p className={maineditorstyles.paragraphlabel}>Border Width</p>
              <input className={maineditorstyles.numberstrokevalue} type="number" min={min} max={max} value={numbervalue} onChange={handleChange} />
              <input className={maineditorstyles.rangestroke} type="range" min={min} max={max} value={numbervalue} onChange={handleChange} />
            </div>
            <div className={maineditorstyles.strokecoloreditorheader}>
              <p className={maineditorstyles.paragraphlabel}>Border Color</p>
              <ColorPicker value={strokecolor} onChange={updatedColor => setstrokeColor(updatedColor.toHexString())} placement="top" presets={strokecolorlist}>
                <button className={activeStrokeColorPicker ? maineditorstyles.strokecoloractive : maineditorstyles.strokecolor} style={{background: strokecolor}} onClick={() => setActiveStrokeColorPicker(!activeStrokeColorPicker)}></button>
              </ColorPicker>
            </div>
          </div>
          <div className={selectedbox === 1 ? maineditorstyles.fillshapeoptionactive : maineditorstyles.fillshapeoption}>
            <div className={maineditorstyles.coloreditorheader2}>
              <p className={maineditorstyles.paragraphlabel3}>Color</p>
              <ColorPicker value={color} onChange={updatedColor => setColor(updatedColor.toHexString())} placement="top" presets={colorlist}>
                <button className={activeColorPicker ? maineditorstyles.coloractive : maineditorstyles.color} style={{background: color}} onClick={() => setActiveColorPicker(!activeColorPicker)}></button>
              </ColorPicker>
            </div>
          </div>
          <div className={selectedbox === 2 ? maineditorstyles.strokeshapeoptionactive : maineditorstyles.strokeshapeoption}>
            <div className={maineditorstyles.strokewidtheditorheader2}>
              <p className={maineditorstyles.paragraphlabel3}>Border Width</p>
              <input className={maineditorstyles.numberstrokevalue} type="number" min={min} max={max} value={numbervalue} onChange={handleChange} />
              <input className={maineditorstyles.rangestroke} type="range" min={min} max={max} value={numbervalue} onChange={handleChange} />
            </div>
            <div className={maineditorstyles.strokecoloreditorheader2}>
              <p className={maineditorstyles.paragraphlabel3}>Border Color</p>
              <ColorPicker value={strokecolor} onChange={updatedColor => setstrokeColor(updatedColor.toHexString())} placement="top" presets={strokecolorlist}>
                <button className={activeStrokeColorPicker ? maineditorstyles.strokecoloractive : maineditorstyles.strokecolor} style={{background: strokecolor}} onClick={() => setActiveStrokeColorPicker(!activeStrokeColorPicker)}></button>
              </ColorPicker>
            </div>
          </div>
          <button className={maineditorstyles.resetbutton} onClick={() =>{
            setSelectedBox(0)
            setColor("white")
            setstrokeColor("#FF66C4")
            setnumberValue(8)
          }}>Reset Shape</button>
          {/* <button className={maineditorstyles.addtodesignbutton}>Add Shape to design</button> */}
        </div>
      </div>
    </div>
  );
};
