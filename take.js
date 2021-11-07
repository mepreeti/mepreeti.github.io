function check()
{
    document.write("never give up!");
    
    var c=0;
    var a1;
    var q1=document.getElementsByName("question1");
    for(i=0;i<q1.length;i++){
        console.log(q1[i].value);
        if(q1[i].checked){
            a1=q1[i].value;
            console.log(q1[i].value);
        }
    }
    //document.write(a1);
    // var q2=document.getElementsByName("question2").value;
    // var q3=document.getElementsByName("question3").value;
    // var q4=document.getElementsByName("question4").value;
    // var q5=document.getElementsByName("question5").value;
    // var q6=document.getElementsByName("question6").value;
    // var q7=document.getElementsByName("question7").value;
    // var q8=document.getElementsByName("question8").value;
    // var q9=document.getElementsByName("question9").value;
    // var q10=document.getElementsByName("question10").value;
    // var result=document.getElementById('result');
    // var quiz=document.getElementById('quiz');
    // if (q1=="Ocean depth")  {c++}
    // if (q2==="Hitler")  {c++}
    // if (q3==="Black")  {c++}
    // if (q4==="they produce high pitched sounds called ultrasonics")  {c++}
    // if (q5===" Dr. A.P.J. Abdul Kalam")  {c++}
    // if (q6==="Uranus")  {c++}
    // if (q7==="Onam")  {c++}
    // if (q8==="glass")  {c++}
    // if (q9==="Guide")  {c++}
    // if (q10==="Seed")  {c++}
    
    // document.write(c);
    // quiz.style.display="none";
    // if(c<7){
    //     result.textContent='Your result is ${c}.It is not good please try to work on yourself.'
    // } else{
    //     result.textContent='Your result is ${c}.It is awesome.Keep it up!!.'

    // }

}