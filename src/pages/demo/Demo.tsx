import React, { useState,useEffect,useMemo, useRef, createRef,memo } from 'react'
import axios from "axios";
import {useNavigate} from 'react-router-dom'
function Demo() {
    const [num, setNum] = useState(0);
    const [name, setName] = useState('mx');
    let num2= useRef(0)
    // let number1=useRef(1)
    let num4=90
    useEffect(() => {
      setTimeout(() => {
        // setName('xx');
        num2.current=4
        num4=100
        setNum(100)
        // number1.current=3
        console.log('daying:-------------------')
      }, 2000)
    }, [])
    // useEffect(()=>{
    //     console.log('number1:变化-------------------')
    // },[number1])
    // console.log('number1',number1.current)
    // const memoVal = useMemo(() => {
    //   console.log('useMemo内部运行了，num值是：', num);
    //   return num + 1;
    // }, [num]);
  
    // console.log('memo值是:', memoVal);
    // console.log('---------------------------------------父组件运行分割线---------------------------------------------')
    function downloadByStream(fileStream) {
        var blob = new Blob([fileStream], {
          type: 'application/docx'
        });
        // if (window.navigator.msSaveOrOpenBlob) {
        //   window.navigator.msSaveBlob(blob, fileName);
        // } else {
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = '123.docx';
          link.click();
          window.URL.revokeObjectURL(link.href);
        // }
    }
    async function  onClickDownload(){
    const response = await axios.get(`workPermit/exportPermit?id=6b180fd692bf493e3a72fe7c42bfddd4`,{responseType:'blob'})
    debugger;
    downloadByStream(response.data)
    }
    
    
    return (
      <div className="App">
        <div>
            <button onClick={onClickDownload}>下载</button>
            {/* number1:{number1.current} */}
            num:{num}
            num4:{num4}
        </div>
        <Children num={num2.current} num4={num4} />
      </div>
    );
  }
  const Children = memo((props:any) => {
    const env=process.env.REACT_APP_BASE_URL
    const env_base=process.env.REACT_APP_BASE_test
    
    
    console.log('env',env)
    const navigate= useNavigate()
    const goToRegist=()=>{navigate('/register')}
    
    console.log('children运行了,对应的props是:',props);
    console.log('--------------------------------子组件运行分割线----------------------------------')
    return (<div>
      <button onClick={goToRegist}>跳转注册页面</button>
      <h5>{env_base}-{env}</h5>
      children:{props.num}-{props.num4}</div>)
  })
  
  export {Demo}
 
