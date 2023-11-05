/*Inside of a closure, create an object called PII 
(Personally Identifiable Information)
that cannot be accessed directly. 
The object should have at least two properties: name and SSN.
 Only the name property should be accessible, and it should be called through a public function.
  The SSN property should not be accessible at all. 
   You can use 'getName' or other get methods to access data that people might need. 
   For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their SSN.


   /* 
   PROCESS
   closure
   object called PII

   give pii object 2 properties of name and ssn 
   use get.name or variation
   */


  function createPII() {

    //object within the closure
    let PII = {
      name:"Chastity Matthews",
      ssn:"987-65-4321",
      age:"25",
      gender:"F"
    };
  
    // Public function to access Info
    function getInfo() {
      return PII.name + " " + PII.age + " " + PII.gender;
    };

  
    // Private function to access the SSN property (not accessible externally)
    function getSSN() {
      return PII.ssn;
    }
  
    // Return the public functionvwithin the closure to access Info
    return {
      getInfo};

    }; // End of closure
  
  
  const patientData = createPII();

  // Allowed to give info
  console.log(patientData.getInfo()); 

  // Not allowed to give info
  console.log(patientData.getSSN());   
  