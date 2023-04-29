import React, {useEffect, useState} from 'react';
//const fs = require('fs/promises');
const dataSrc = "abcdefghijklmnopqrstuvwxyz0123456789";

export function incremenTer(a,b){
    var List = [];
    let i = 0
    let e=Math.floor(b/a)*a 
    let z=(b%a)

    
      if(z !=0 ) 
     { 
         while (i < e)
         {
           i =i+a
           List.push(i)
             
         }
      List[List.length-1]=List[List.length-1]+z 
      return List       
     }
    else{
         while (i < b)
         {
           i =i+a
           List.push(i)
             
         }
        return List 
    }

}
 
export function array2D(a){
    
    var arr = new Array(a);            
    for (var i = 0; i < a; i++) {
        arr[i] = new Array()        
    }
    
    return arr    
        
}

export function separerTab(deCB,tailleTab,leTab){  //le sépareur de tableau

    var List4 = [0];
    var List5 = [];
    var tabMesurer = incremenTer(deCB,tailleTab);
    var size1=tabMesurer.length;
    var size2=size1-1;
    var ndeux = array2D(size1)

    for(let i=0; i < size2;i++)              //génère le tab d'interval
    {    
       List4.push(tabMesurer[i])
    }
    for(let i=0; i < size1; i++)            //génère le tab d'interval
    {
        List5.push(tabMesurer[i])         
    } 
    

    for(let i =0; i < size1; i++)           //affiche les éléments celon les intervalls "finaux"
    {
        var varr = leTab.slice(List4[i], List5[i])
        ndeux[i] = varr
    }
    
 return ndeux
}


export function randomN(najoute,entre){    //fonction que on va utiliser pour mélanger les indexs une première fois en va dire les deux paramètre que sa prends en entré c'est la taille du tableau
    var arr = [];
    while(arr.length < najoute){
        var r = Math.floor(Math.random() * entre);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr
}
export function shuffle(array) {          //fonction que on va utiliser pour mélanger les indexs une deuxième fois pour que sa soit fort
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

export function theIndex(tablen){        //fonction qui va nous donner un tableau qui contient les numeros d'index mélanger que l'on va stocker en variable prend en paramètre la taille du tableau

    let recupIndex = []
    let indexMixed = shuffle(randomN(tablen,tablen))
    let e = tablen

    for(let i = 0; i < e;i++)
    {
        recupIndex.push(indexMixed[i])
    }
    return recupIndex
}

//let myArray_ = [4,5,7,9,2,6,3,1,11];
//var myIndex = theIndex(myArray_.length) // important ne mettre notre taille de tableau en question ici (mélangeur d'index) // fonction qui va fournir un tableau d'index mélanger
export function mixedArray(tabname,tablen,myIndex){ // fonction finale qui va retourner un tableau mélanger mais il est important avant ("d'allumer le mélangeur d'index") //fonction qui mélange le tableau il prend en paramètre un tableau avec des numero d'index mélanger un tableau et sa taille
    let myArray2 = []
    let newArray = []
    let e = tablen

    for(let i = 0; i < e;i++)
    {
        myArray2.push(tabname[i])
    }

    for(let i =0; i < e;i++)
    {
        tabname[myIndex[i]] = myArray2[i]  
    }

    for(let i = 0; i < e;i++)
    {
        newArray.push(tabname[i])
    }

    return newArray

}

export function genrateKey(cb,max){
    var a = randomN(cb,max);
    var arr9 = [];
    var qutre
    for(let e = 0; e < a.length; e++){
      qutre = dataSrc[a[e]]; 
      arr9.push(qutre)
    }

    var sum ="";
    for (let i = 0; i < arr9.length; i++) {
       sum += arr9[i];
    }
    return sum;
}




export function mixed2dArray(tabname,tablen,myIndex){ // fonction finale qui va retourner un tableau mélanger mais il est important avant ("d'allumer le mélangeur d'index") //fonction qui mélange le tableau il prend en paramètre un tableau avec des numero d'index mélanger un tableau et sa taille
  let newArray = array2D(tablen)
  let e = tablen

  for(let i = 0; i < e;i++)
  {
    newArray[i]=tabname[myIndex[i]]
  }
  return newArray

}

        
          

        
          
export function acTes(test4){
    let e = `"`;
    let e4 = `",`;
    const newString = test4.split(/[\r\n]+/gm)
    for (const element of newString){
      if (element.match(/^[a-zA-Z]+/))
      {
        test4 = test4.replace(element, e+element+e4);
      }
    }
    return test4;
  }
  
  
export function remove_linebreaks(str) {
      return str.replace( /[\r\n]+/gm, " " );
  }
  

export function toArray(){
      let array4 = "myTab = ";
      var div8 = document.getElementById("entrer").value;
      var div4 = document.getElementById("sortie").innerHTML;
      const newString = remove_linebreaks(div8);
      const newString2 = acTes(div8);
      let newStrin = newString2.substring(0, newString2.length - 1);
      var results ="["+newStrin+"]";
      document.getElementById("sortie").innerHTML = remove_linebreaks(results);
      return newStrin
  }
  
  
export function copy4(){
      var contentToCopy = document.getElementById("sortie").value;
      navigator.clipboard.writeText(contentToCopy).then(function() {
        console.log('Copied to clipboard with async.');
      }, function(err) {
        console.error('Unable to copy with async ', err);
      });
  }
