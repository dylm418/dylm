import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../store/counterSlice";
import Schema from "../Schema";


export default function Uschema() {
//c'est ici que se trouve les données officiels
const araay = ["https://media.discordapp.net/attachments/639324278684123136/1033307953257775224/unknown.png", "https://media.discordapp.net/attachments/639324278684123136/1033307359361118208/unknown.png", "réponse1", "réponse2", "réponse3", "réponse4", "définition1", "définition2", "définition3", "définition4",4];

//y,x
var counter = 0;
const tharray = ["hello1","hello2","hello3","hello4","hello5","hello6","hello7","hello8"];
const tharray5 = ["bonjour1","bonjour2","bonjour3","bonjour4","bonjour5","bonjour6","bonjour7","bonjour8"];
//var araay = [["https://media.discordapp.net/attachments/639324278684123136/1033307953257775224/unknown", "https://media.discordapp.net/attachments/639324278684123136/1033307359361118208/unknown", "réponse1", "réponse2", "réponse3", "réponse4", "définition1", "définition2", "définition3", "définition4",4]];
  return (
    <div>
      <Schema array9={araay}></Schema>
    </div>
    
  );
}
