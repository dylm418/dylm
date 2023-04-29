import OneForm from "./OneForm";
import Quiz from "./Quiz";
import Schema from "./Schema";
import './Styles.css';

export default function Page(props) {// format qui sera afficher partout                              contenu
        var quatre = 8;
        if(quatre=="oneform"){
            return (      
            <div>
                <h2>chiffre numero neuf {props.name}</h2>
                <OneForm front={props.front} back={props.back} cb={props.cb}></OneForm>
            </div>
            )        
        }


        if(quatre=="FormLnchr"){
            return (      
            <div>
                <h2>chiffre numero neuf {props.name}</h2>
                <FormLnchr front={props.front} back={props.back} cb={props.cb}></FormLnchr>
            </div>
            )        
        }


        if(props.mode=="quiz"){
            return (      
            <div>
                <h2>chiffre numero huit {props.name}</h2>
                <Quiz front={props.front} back={props.back} cb={props.cb}></Quiz>
            </div>
            )        
        }


        if(props.mode=="sldrr9"){
            return (      
            <div>
                <h2>chiffre numero huit {props.name}</h2>
                <Sldrr9 front={data9.textFront2} back={data9.textBack2} cb={5} mod={"mode1"}></Sldrr9>
                
            </div>
            )        
        }


        if(props.mode=="schema"){
            return (      
            <div>
                <h2>chiffre numero huit {props.name}</h2>
                <Schema front={data9.textFront2} back={data9.textBack2} cb={5} mod={"mode1"}></Schema>
                
            </div>
            )        
        }


        if(props.mode=="qcmword1"){
            return (      
            <div>
                <h2>chiffre numero huit {props.name}</h2>
                <Qcmword front={data9.textFront2} back={data9.textBack2} cb={5} mod={"mode1"}></Qcmword>
            </div>
            )        
        }


        if(props.mode=="qcmword2"){
            return (      
            <div>
                <h2>chiffre numero huit {props.name}</h2>
                <Qcmword front={data9.textFront2} back={data9.textBack2} cb={5} mod={"mode2"}></Qcmword>
            </div>
            )        
        }


    }



















//push last
//unshift first



















