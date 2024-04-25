import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { BiEdit } from 'react-icons/bi';
import { IoMdRepeat } from 'react-icons/io'
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
function threeDAllR(inputArray) {
    const resultArray = [];

    // Function to reverse the characters of a string while preserving leading zeros
    function reverseStringWithLeadingZeros(str) {
        const reversedString = str.split("").reverse().join("");
        return reversedString;
    }

    // Ensure unique strings and transform each
    const uniqueStrings = [...new Set(inputArray)];

    uniqueStrings.forEach(str => {
        // Include the original string with leading zeros if necessary
        resultArray.push(str);

        // Include the reversed string if it's different from the original
        const reversedString = reverseStringWithLeadingZeros(str);

        // Ensure that reversed '000' is '000' and handle duplicates like '101'
        if (str !== reversedString) {
            resultArray.push(reversedString);

            // Include reversed forms starting with '0' for strings that originally start with '0'
            if (str.startsWith('0')) {
                const reversedWithZero = reverseStringWithLeadingZeros(reversedString);

                // Include the reversed form with '0' even if it's the same as the original
                if (!resultArray.includes(reversedWithZero)) {
                    resultArray.push(reversedWithZero);
                }
            }
        }
    });

    // Additional reversed forms by permuting the digits
    for (let i = 0; i < uniqueStrings.length; i++) {
        const str = uniqueStrings[i];
        const visited = Array(str.length).fill(false);
        permute(str, '', visited);
    }

    // Function to generate all permutations of a string
    function permute(str, current, visited) {
        if (current.length === str.length) {
            if (!resultArray.includes(current)) {
                resultArray.push(current);
            }
            return;
        }

        for (let i = 0; i < str.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                permute(str, current + str[i], visited);
                visited[i] = false;
            }
        }
    }

    return resultArray.sort(); // Sort the array to ensure the desired order
}
const ThreeDConfirmPage = () => {
    const navigate=useNavigate();
    const [user3D,setUser3D]=useState(JSON.parse(localStorage.getItem('user-3d-bet'))|| []);
     const [numbers,setNumbers]=useState(user3D.map((u)=>u.number))
     let total=0;
   user3D.map((u)=>{
    total+=Number(u.amount)
   });
   const allRHandler=()=>{
    const numbersToAdd=threeDAllR(numbers);
    numbersToAdd.map((n)=>{
    if(!numbers.includes(n)){
        setNumbers((prev)=>[...prev,n])
         setUser3D((prev)=>[...prev,{
             number:n,
            amount:'100',
            isEdit:false
        }])
    }
   })
}
console.log('numbers',numbers)
   const editAmount=(newAmount,number)=>{
     setUser3D(user3D.map((n)=>n.number==number ? n={...n,amount:newAmount} : n))
     const newData=user3D.map((n)=>n.number==number ? n={...n,amount:newAmount} : n)
     localStorage.setItem('user-3d-bet',JSON.stringify(newData))

 }
 const delNumber=(number)=>{
     setUser3D(user3D.filter(n=>n.number!==number));
     const newData=user3D.filter(n=>n.number!==number)
     localStorage.setItem('user-3d-bet',JSON.stringify(newData))

 }
   const handleIsEdit=(number)=>{
    setUser3D(user3D.map((n)=>n.number==number ? n={...n,isEdit:!n.isEdit} : n))
}
const userBetConfirm=()=>{
    const finalData=user3D.map((u)=>{
        return {number:u.number,amount:u.amount,date:new Date()}
    });
    const oldBetData=JSON.parse('user-3d-confirm');
    localStorage.setItem('user-3d-confirm',JSON.stringify([...oldBetData,finalData]))
    localStorage.removeItem('user-3d-bet');
    setNumbers([]);
    setUser3D([]);
    navigate('/3d-bet-history')
    
}
  return (
    <div className="mx-2" style={{marginBottom:'100px'}}>
        <div style={{background:'#E3B10E'}} className="startProfile mb-3 p-2 d-flex flex-column gap-2 ">
        <span className=" mt-3 ">ဂဏန်းအရေအတွက် : 
         <span className="mx-1 fw-bold">{user3D?.length}</span> ကွက်
         </span>
        <span className="mt-2" >ဂဏန်းများ :
            <span className="mx-1 fw-bold">
            {numbers?.map((n,i)=>{
                if(i+1==user3D.length) return n
                else return n+', '
            })}
            </span>
        </span>
        
        <span  className="mt-2" >
            စုစုပေါင်းကျသင့်ငွေ: <span className="fw-bold">{total} ကျပ်</span>
        </span>
        <span >
            လက်ကျန်ငွေ: <span className="fw-bold"> 0 </span> ကျပ်
        </span><br/>
        </div>
        <Button  onClick={allRHandler} className="mb-3 rounded-5 fw-bold border-0" style={{background:' linear-gradient(rgb(254, 78, 54), rgb(255, 119, 21))',fontSize:'13px'}} >All R <IoMdRepeat size={23} /></Button><br/>
        <Table className='mt-2' striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>စဉ်</th>
                        <th>နံပါတ်</th>
                        <th>ပမာဏ</th>
                        <th>ပြင်/ဖျက်</th>
                     </tr>
                </thead>
                <tbody>
                    {user3D?.map((item,index)=>{
                        return <tr key={index}>
                         <td>{index+1}</td>
                         <td>{item.number} </td>
                         <td>
                            {item.isEdit ? <input 
                             style={{width:'60px'}}
                             onChange={(e)=>editAmount(e.target.value,item.number)}
                              value={item.amount}  
                              /> :  <p>{item.amount}</p>}
                         </td>
                         <td>
                             <BiEdit size={25} className='me-2' onClick={()=>handleIsEdit(item.number)} />
                             <MdDelete  size={25}  onClick={()=>delNumber(item.number)} />
                         </td>
                     </tr>
                    })}
                   
                    </tbody>
            </Table>
       
        <Button onClick={ userBetConfirm}  style={{background:' linear-gradient(rgb(254, 78, 54), rgb(255, 119, 21))'}} >
        အတည်ပြုမည် 
        </Button>
     </div>
  )
}

export default ThreeDConfirmPage
