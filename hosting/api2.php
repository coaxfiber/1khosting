<?php
// This is the API, 2 possibilities: show the app list or show a specific app by id.
// This would normally be pulled from a database but for demo purposes, I will be hardcoding the return values.

include_once('config/database.php');
include_once('objects/1kdom.php');
                                                    
header("Access-Control-Allow-Origin: *");

header('Content-Type: application/json');


function get_app_list()
{
  $database = new Database();
  $db = $database->getConnection();
  $read = new Domain($db);
  $x=0;
  $read->email = $_GET['email'];
  $stmt = $read->read();
    while ($row = $stmt->fetch()) {
                $array= array("message" => "success","id" => $row['id'],"domain" =>  $row['domain'], "expires" =>  $row['expires'],"email" =>  $row['email']);
              $app_list[$x] =$array;
              $x++;
      }
      if ($x==0) {
        $app_list[0]= array("message" => "failed");
      }
  return $app_list;
}
$value = get_app_list();
//return JSON array
exit(json_encode($value));
?>