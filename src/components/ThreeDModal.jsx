import React,{useEffect,useContext,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
 function threeDGenerateNumbers(start, end) {
  const result = [];

  for (let i = start; i <= end; i++) {
    // Convert the number to a string and pad with leading zeros if needed
    let formattedNumber = i.toString().padStart(2, '0');
  if(formattedNumber.length==2) formattedNumber='0'+i.toString().padStart(2, '0');
    result.push(formattedNumber);
  }

  return result;
}
function ThreeDModal({user3DNumbers,setUser3DNumbers,user3D,setUser3D}) {
  
    console.log('user3DNumbers',user3DNumbers)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [amount,setAmount]=useState('100');
  const threeDigits=['000','111','222','333','444','555','666','777','888','999'];
  const digit100=['000-099','100-199','200-299','300-399','400-499','500-599',
  '600-699','700-799','800-899','900-999'];
  const threeDigitToAdd=(digit)=>{
    if(!user3DNumbers.includes(digit)){
        setUser3DNumbers([...user3DNumbers,digit]);
        setUser3D([...user3D,{
             number:digit,
            amount,
            isEdit:false
        }])
    }
  }
  const generateNumbers=(startEndString)=>{
    const [start,end]=startEndString.split('-');
    const numbersToAdd=threeDGenerateNumbers(Number(start),Number(end));
    numbersToAdd.map((n)=>{
      if(!user3DNumbers.includes(n)){
        setUser3DNumbers((prev)=>[...prev,n])
        setUser3D((prev)=>[...prev,{
           number:n,
          amount,
          isEdit:false
      }])
      }
    })
  }
  return (
    <>
      <Button className='btn p-2 rounded-xl w-max my-2 text-white' style={{background:'linear-gradient(#fe4e36,#ff7715)',height:'40px'}} onClick={handleShow}>
      အမြန်ရွေး
      </Button>

      <Offcanvas style={{height:'100vh'}} placement='bottom' show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <p>ငွေပမာဏ (အနည်းဆုံး 100 ကျပ်)</p>
          <Form.Control type="text" value={amount} onChange={(e)=>setAmount(e.target.value)} className=' px-1 rounded w-50' placeholder='ငွေပမာဏ (အနည်းဆုံး 100 ကျပ်)' /> <br/>
         <div className='mb-3'>
            <h6>(3)လုံးပူး ဂဏန်းများ</h6>
          {
          threeDigits.map((digit,index)=>{ 
                            return <button key={index} onClick={()=>threeDigitToAdd(digit)} className='btn btn-outline-success px-3 m-3'>{digit}</button>
                        })
                    }
         </div>
         <div className='mb-3'>
            <h6>အကွက် 100</h6>
          {
          digit100.map((digit,index)=>{
                            return <button key={index} onClick={()=>generateNumbers(digit)} className='btn btn-outline-success px-3 m-3'>{digit}</button>
                        })
                    }
         </div>
       
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ThreeDModal;