import "./Main.css";
import Block from "./Block.jsx";


function Main(props){

    // Необходимо для сдвига массива (dataMock) влево
    let indexBack = 0;

    return(
        <div className="grid-main">
            <div  className="main">
                {/* Вывод всех блоков в цикле */}
                {props.dataMock.map((element, index)=>
                    {
                        
                        let onFunc = element.onFunction;
                        if(index>0){
                            // Сдвиг влево
                            indexBack = index - 1;
                        }

                        return(
                            <Block
                                array={element}
                                onWrite={onFunc}
                                partArray={props.dataMock[indexBack].issues}
                                index={index}
                            />)
                    }
                )}
            </div>
        </div>
    );
}

export default Main;