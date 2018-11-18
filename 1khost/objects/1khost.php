<?php
class Hosting{
 
    // database connection and table name
    private $conn;
    private $table_name = "1kh_hosting";
 
    // object properties
    public $id;
    public $domain;
    public $ftphost;
    public $ftpuname;
    public $ftppword;
    public $ftpport;
    public $dblink;
    public $dbname;
    public $dbuser;
    public $dbpword;
    public $dbhost;
    public $email;
    public $userid;
    public $expire;
 
    public function __construct($db){
        $this->conn = $db;
    }

   
    // create the g
    function create(){
      
    // update query
    $query = "INSERT INTO
                " . $this->table_name . "
            VALUES(null,:lname,:fname,:mname,:email,:mobile,:category,:agency,:rcode,'0',:code)";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
    
        $this->lname=htmlspecialchars(strip_tags($this->lname));
        $this->fname=htmlspecialchars(strip_tags($this->fname));
        $this->mname=htmlspecialchars(strip_tags($this->mname));
        $this->email=htmlspecialchars(strip_tags($this->email));
        $this->mobile=htmlspecialchars(strip_tags($this->mobile));
        $this->category=htmlspecialchars(strip_tags($this->category));
        $this->agency=htmlspecialchars(strip_tags($this->agency));
        $this->rcode=htmlspecialchars(strip_tags($this->rcode));
        $this->code=htmlspecialchars(strip_tags($this->code));
    // bind new values
        $stmt->bindParam(':lname', $this->lname);
        $stmt->bindParam(':fname', $this->fname);
        $stmt->bindParam(':mname', $this->mname);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':mobile', $this->mobile);
        $stmt->bindParam(':category', $this->category);
        $stmt->bindParam(':agency', $this->agency);
        $stmt->bindParam(':rcode', $this->rcode);
        $stmt->bindParam(':code', $this->code);

    // execute the query
            if($stmt->execute()){
                return true;
            }else{
                return false;
            }
    }
    // read 1 incharge
    function read(){
        // create query
         $query = "SELECT
                   *
                    FROM
                    " . $this->table_name . " where email=:email";
        // prepare query statement

        $stmt = $this->conn->prepare($query);

        $this->email=htmlspecialchars(strip_tags($this->email));
        $stmt->bindParam(':email', $this->email);
        $stmt->execute();
        return $stmt;
    }
    function readcode($s){
        // create query
         $query = "SELECT
                    code
                    FROM
                    " . $this->table_name . " where code = '".$s."'";
        // prepare query statement
       
        $stmt = $this->conn->prepare( $query );
        $stmt->execute();
        return $stmt;
    }

    function report($date1,$date2,$d,$c,$y,$t){
        if ($d=='') {
           $code1 = "";
        }else{
            $code1 = " AND department = '".$d."'";
        }
         if ($c=='') {
           $code2 = "";
        }else{
            $code2 = " AND course = '".$c."'";
        }
         if ($y=='') {
           $code3 = "";
        }else{
            $code3 = " AND year = '".$y."'";
        }
         if ($t=='') {
           $code4 = "";
        }else{
            $code4 = " AND entrytype = '".$t."'";
        }
         $query = "SELECT
                    *
                    FROM
                    " . $this->table_name . "  WHERE DATE(timedata) BETWEEN '".$date1." 00:00:00' AND '".$date2." 23:59:59'
                    " . $code1. $code2. $code3. $code4;
        
        // prepare query statement
       
        $stmt = $this->conn->prepare( $query );
        $stmt->execute();
 
        return $stmt;
    }

function record($date1,$date2,$rid){
        
        $rid=htmlspecialchars(strip_tags($rid));
         $query = "SELECT
                    *
                    FROM
                    " . $this->table_name . "  WHERE DATE(timedata) BETWEEN '".$date1." 00:00:00' AND '".$date2." 23:59:59'
                    AND idno = '".$rid."'";
        
        // prepare query statement
       
        $stmt = $this->conn->prepare( $query );
        $stmt->execute();
 
        return $stmt;
    }


    function report2($date1,$date2,$d,$c,$y,$t){
        if ($d=='') {
           $code1 = "";
        }else{
            $code1 = " AND department = '".$d."'";
        }
         if ($c=='') {
           $code2 = "";
        }else{
            $code2 = " AND course = '".$c."'";
        }
         if ($y=='') {
           $code3 = "";
        }else{
            $code3 = " AND year = '".$y."'";
        }
         if ($t=='') {
           $code4 = "";
        }else{
            $code4 = " AND entrytype = '".$t."'";
        }
         $query = "SELECT DISTINCT
                    B.idno, B.fullname, B.entrytype,B.department,B.course,B.year,(Select Count(A.fullname) From " . $this->table_name . " A WHERE DATE(A.timedata) BETWEEN '".$date1." 00:00:00' AND '".$date2." 23:59:59'
                    " . $code1. $code2. $code3. $code4 ." AND B.fullname = A.fullname AND B.idno = A.idno) as countthis
                    FROM
                    " . $this->table_name . " as B  WHERE DATE(timedata) BETWEEN '".$date1." 00:00:00' AND '".$date2." 23:59:59'
                    " . $code1. $code2. $code3. $code4 . " Order by countthis Desc";
        
        // prepare query statement
       
        $stmt = $this->conn->prepare( $query );
        $stmt->execute();
 
        return $stmt;
    }

     // read all incharge
    function readall(){
        // create query
         $query = "SELECT
                    *
                    FROM
                    " . $this->table_name ;
        // prepare query statement
       
        $stmt = $this->conn->prepare( $query );
        $stmt->execute();
 
        return $stmt;
    }

    

    function update(){
        
        // create query
        $query = "UPDATE 
                " . $this->table_name . "
            SET 
                answer = :answer
            WHERE
                 questionid = :questionid and studentid = :studentid";
     
        // prepare query statement
        $stmt = $this->conn->prepare($query);
        // posted values
        $this->answer=htmlspecialchars(strip_tags($this->answer));
        // bind new values
        $stmt->bindParam(':questionid', $this->questionid);
        $stmt->bindParam(':studentid', $this->studentid);
        $stmt->bindParam(':answer', $this->answer);
         
        // execute the query
        if($stmt->execute()){
            return true;
        }else{
            return false;
        }
    }
    // used by select drop-down list
    function check($qid,$sid,$sem){
        //select all data
        $query = "SELECT
                    *
                FROM
                    " . $this->table_name." WHERE questionid = ".$qid." and studentid = ".$sid." and schoolyear = '".$sem."'";  
 
        $stmt = $this->conn->prepare( $query );
        $stmt->execute();
 
        return $stmt;
    }

    function quesrespo($filt,$ans){
        //select all data
        $query = "SELECT 
                    *
                FROM
                    " . $this->table_name." WHERE questionid = ".$filt." and answer = ".$ans;  
 
        $stmt = $this->conn->prepare( $query );
        $stmt->execute();
 
        return $stmt;
    }

    function respondents(){
        //select all data
        $query = "SELECT DISTINCT
                    studentid
                FROM
                    " . $this->table_name." ORDER BY studentid";  
 
        $stmt = $this->conn->prepare( $query );
        $stmt->execute();
 
        return $stmt;
    }

 



function remove(){
 
    // update query
    $query = "DELETE FROM
                " . $this->table_name . "
            WHERE
                id = :id and user_id = :user_id";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    if (file_exists('assets/img/photos/'.$this->lat.'-'.$this->lng.'.png')) {
      unlink('assets/img/photos/'.$this->lat.'-'.$this->lng.'.png');
    }
    // bind new values
    $stmt->bindParam(':id', $this->id);
    $stmt->bindParam(':user_id', $this->user_id);
     
    // execute the query
    if($stmt->execute()){
        return true;
    }else{
        return false;
    }
}



}
?>