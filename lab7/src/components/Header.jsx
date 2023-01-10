import React, {useState} from "react";

const Header = () => {
    const [first_style, setFirstColor] = useState({ background: '#def1c8', color: '#000'});
    const [second_style, setSecondColor] = useState({ background: '#def1c8', color: '#000'});

    const onClickFirst = () => {
        setFirstColor({ background: getRandomColor(), color: getRandomColor()
        });
    };

    const onClickSecond = () => {
        setSecondColor({ background: getRandomColor(), color:
                getRandomColor() });
    };
    return(<>
        <h2>  Копайгородська Дар'я Леонідівна </h2>
        <div style={first_style} onClick={onClickFirst}>
            <h3>Місце народження: 15 березня 2003 року, м. Старокостянтинів</h3>
        </div>
        <div style={second_style} onClick={onClickSecond}>
            <h3>Освіта: Старокостянтинівський ліцей ім. М. С Рудяка</h3>
        </div>
        </>)
};
function getRandomColor() {
    return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255)
        + ',' + Math.floor(Math.random() * 255) + ')';
};

export default Header;