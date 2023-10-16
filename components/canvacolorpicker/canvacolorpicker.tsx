import React, { useState } from 'react';
import { ColorPicker } from 'antd';
import maineditorstyles from "styles/maineditor.css"

const CanvaColorPicker: React.FC = () => {
    const [color, setColor] = useState("#FF66C4");
    const [activeColorPicker, setActiveColorPicker] = useState(false);

    return (
        <ColorPicker value={color} onChange={() => setColor}>
            <button className={activeColorPicker ? maineditorstyles.strokecoloractive : maineditorstyles.strokecolor} style={{background: color}} onClick={() => setActiveColorPicker(activeColorPicker => !activeColorPicker)}></button>
        </ColorPicker>
    );
};

export default CanvaColorPicker;