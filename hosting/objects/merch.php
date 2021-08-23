<?php
class Merchs{
 
    // database connection and table name
    private $conn;
    private $table_name = "tconreg_regmerch";
 
    // object properties
    public $id;
    public $regid;
    public $merchid;
    public $quantity;
    public $status;
 
    public function __construct($db){
        $this->conn = $db;
    }


function reg(){
 
    // update query
    $query = "INSERT INTO
                " . $this->table_name . "
            VALUES(null,:regid,:merchid,:quantity,'0' )";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // bind new values
    $stmt->bindParam(':regid', $this->regid);
    $stmt->bindParam(':merchid', $this->merchid);
    $stmt->bindParam(':quantity', $this->quantity);

    // execute the query
    if($stmt->execute()){
        return true;
    }else{
        return false;
    }
}

}
?>