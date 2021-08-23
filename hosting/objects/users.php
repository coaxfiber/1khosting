<?php
class Users{
 
    // database connection and table name
    private $conn;
    private $table_name = "user";
 
    // object properties
    public $id;
    public $fbid;
    public $fullname;
    public $email;
    public $contact;
    public $status;
 
    public function __construct($db){
        $this->conn = $db;
    }

function read($email){
        //select all data
        $query = "SELECT
                    *
                FROM
                    " . $this->table_name." WHERE email = '".$email."'";  
 
        $stmt = $this->conn->prepare( $query );
        $stmt->execute();
 
        return $stmt;
    }
function add(){
 
    // update query
    $query = "INSERT INTO
                " . $this->table_name . "
            VALUES(null,null,:fullname,:email,:contact,0)";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // bind new values
    $stmt->bindParam(':fullname', $this->fullname);
    $stmt->bindParam(':email', $this->email);
    $stmt->bindParam(':contact', $this->contact);

    // execute the query
    if($stmt->execute()){
        return true;
    }else{
        return false;
    }
}
function update(){
 
    // update query
    $query = "UPDATE 
                " . $this->table_name . "
            SET 
                contact = :contact
            WHERE
                 email = :email";;
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // bind new values
    $stmt->bindParam(':contact', $this->contact);
    $stmt->bindParam(':email', $this->email);

    // execute the query
    if($stmt->execute()){
        return true;
    }else{
        return false;
    }
}

}
?>