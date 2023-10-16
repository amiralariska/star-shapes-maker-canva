import { addNativeElement } from "@canva/preview/design";
import { upload } from "@canva/asset";
import { DraggableImage } from "components/draggable_image";
import starShapefill from "assets/images/star-shape-fill.png"
import starShapefillwithstroke from "assets/images/star-shape-fill-with-stroke.png"
import starShapeRosepinkColor from "assets/images/star-shape-rose-pink-color.png"
import starShapeRedColor from "assets/images/star-shape-red-color.png"
import starShapeBlueColor from "assets/images/star-shape-blue-color.png"
import starShapeGreenColor from "assets/images/star-shape-green-color.png"
import starShapeCyanColor from "assets/images/star-shape-cyan-color.png"
import starShapeYellowColor from "assets/images/star-shape-yellow-color.png"
import React, { Fragment } from "react";
import styles from "styles/components.css";
import { PlusIcon } from "components/plusicon/PlusIcon";
import { ShapesIcon, ShapesIcon2, ShapesIcon3, ShapesIcon4, ShapesIcon5, ShapesIcon6, ShapesIcon7, ShapesIcon8 } from "components/shapesicon/ShapesIcon";

export const MainApp = () => {
    async function starshapefill() {
        const firstimportimage = await upload({
        type: "IMAGE",
        id: "starshapefill",
        mimeType: "image/png",
        url: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-fill.png",
        thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-fill.png"
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
        url: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-fill-with-stroke.png",
        thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-fill-with-stroke.png"
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
        url: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-rose-pink-color.png",
        thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-rose-pink-color.png",
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
        url: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-red-color.png",
        thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-red-color.png",
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
        url: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-blue-color.png",
        thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-blue-color.png",
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
        url: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-green-color.png",
        thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-green-color.png",
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
        url: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-cyan-color.png",
        thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-cyan-color.png",
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
        url: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-yellow-color.png",
        thumbnailUrl: "https://raw.githubusercontent.com/amiralariska/shapes-generator-canva/shapes-generator-canva/assets/images/star-shape-yellow-color.png",
        })
        await addNativeElement({
        type: "IMAGE",
        ref: eighthimportimage.ref,
        });
    }
    return (
        <Fragment>
            {/* Container */}
            <div className={styles.container}>
                <h1 className={styles.heading}>Shapes Generator</h1>
                <p className={styles.paragraph}>Add your custom shape to your design</p>
                <p className={styles.middleparagraph}>or</p>
                <p className={styles.paragraph}>Drag your custom shape to your design</p>
            </div>
            {/* Subtitle Section */}
            <p className={styles.paragraphlist}>Star Shape</p>
            {/* Grid Image View */}
            <div className={styles.gridimage}>
                <div className={styles.imagebutton}>
                <div className={styles.images}>
                    <DraggableImage className={styles.firstimage} src={starShapefill} width={150} onClick={starshapefill} />
                    <div className={styles.topoption}>
                    <button className={styles.addtodesign} onClick={starshapefill}>
                        <PlusIcon />
                    </button>
                    </div>
                    <div className={styles.details}>
                    <div className={styles.customshapes}>
                        <ShapesIcon className={styles.shapes} />
                        <span className={styles.title}>Star Shape - Fill</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.imagebutton2}>
                <div className={styles.images}>
                    <DraggableImage className={styles.secondimage} src={starShapefillwithstroke} width={150} onClick={starshapefillwithstroke} />
                    <div className={styles.topoption2}>
                    <button className={styles.addtodesign2} onClick={starshapefillwithstroke}>
                        <PlusIcon />
                    </button>
                    </div>
                    <div className={styles.details2}>
                    <div className={styles.customshapes2}>
                        <ShapesIcon2 className={styles.shapes2} />
                        <span className={styles.secondtitle}>Star Shape - Fill With Stroke</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Subtitle Section 2 */}
            <p className={styles.secondparagraphlist}>Star Shape - Color Variants</p>
            {/* Grid Image View 2 */}
            <div className={styles.gridimage2}>
                <div className={styles.imagebutton3}>
                <div className={styles.images}>
                    <DraggableImage className={styles.thirdimage} src={starShapeRosepinkColor} width={150} onClick={starshaperosepinkcolor} />
                    <div className={styles.topoption3}>
                    <button className={styles.addtodesign3} onClick={starshaperosepinkcolor}>
                        <PlusIcon />
                    </button>
                    </div>
                    <div className={styles.details3}>
                    <div className={styles.customshapes3}>
                        <ShapesIcon3 className={styles.shapes3} />
                        <span className={styles.thirdtitle}>Star Shape - Rose Pink</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.imagebutton4}>
                <div className={styles.images}>
                    <DraggableImage className={styles.fourthimage} src={starShapeRedColor} width={150} onClick={starshaperedcolor} />
                    <div className={styles.topoption4}>
                    <button className={styles.addtodesign4} onClick={starshaperedcolor}>
                        <PlusIcon />
                    </button>
                    </div>
                    <div className={styles.details4}>
                    <div className={styles.customshapes4}>
                        <ShapesIcon4 className={styles.shapes4} />
                        <span className={styles.fourthtitle}>Star Shape - Red</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.imagebutton5}>
                <div className={styles.images}>
                    <DraggableImage className={styles.fifthimage} src={starShapeBlueColor} width={150} onClick={starshapebluecolor} />
                    <div className={styles.topoption5}>
                    <button className={styles.addtodesign5} onClick={starshapebluecolor}>
                        <PlusIcon />
                    </button>
                    </div>
                    <div className={styles.details5}>
                    <div className={styles.customshapes5}>
                        <ShapesIcon5 className={styles.shapes5} />
                        <span className={styles.fifthtitle}>Star Shape - Blue</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.imagebutton6}>
                <div className={styles.images}>
                    <DraggableImage className={styles.sixthimage} src={starShapeGreenColor} width={150} onClick={starshapegreencolor} />
                    <div className={styles.topoption6}>
                    <button className={styles.addtodesign6} onClick={starshapegreencolor}>
                        <PlusIcon />
                    </button>
                    </div>
                    <div className={styles.details6}>
                    <div className={styles.customshapes6}>
                        <ShapesIcon6 className={styles.shapes6} />
                        <span className={styles.sixthtitle}>Star Shape - Green</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.imagebutton7}>
                <div className={styles.images}>
                    <DraggableImage className={styles.seventhimage} src={starShapeCyanColor} width={150} onClick={starshapecyancolor} />
                    <div className={styles.topoption7}>
                    <button className={styles.addtodesign7} onClick={starshapecyancolor}>
                        <PlusIcon />
                    </button>
                    </div>
                    <div className={styles.details7}>
                    <div className={styles.customshapes7}>
                        <ShapesIcon7 className={styles.shapes7} />
                        <span className={styles.seventhtitle}>Star Shape - Cyan</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className={styles.imagebutton8}>
                <div className={styles.images}>
                    <DraggableImage className={styles.eighthimage} src={starShapeYellowColor} width={150} onClick={starshapeyellowcolor} />
                    <div className={styles.topoption8}>
                    <button className={styles.addtodesign8} onClick={starshapeyellowcolor}>
                        <PlusIcon />
                    </button>
                    </div>
                    <div className={styles.details8}>
                    <div className={styles.customshapes8}>
                        <ShapesIcon8 className={styles.shapes8} />
                        <span className={styles.eighthtitle}>Star Shape - Yellow</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    )
}