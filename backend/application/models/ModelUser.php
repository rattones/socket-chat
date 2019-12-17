<?php 
/**
 * database table: user
 */
class ModelUser extends CI_Model 
{
    /**
     * parent constructor
     */
    public function __construct() 
    {
        parent::__construct();
    }
    /**
     * user list
     * @param string $uid 
     * @return array 
     */
    public function list(string $uid= null) : array
    {
        $this->db->select()
            ->from('user');

        if (!is_null($uid)) {
            $this->db->where('uid', $uid);
        }

        $query= $this->db->get();

        return $query->result_array();
    }
    /**
     * add a new user 
     * @param array $obj 
     * @return bool
     */
    public function add(array $obj) : bool
    {
        if (!isset($obj['email'])) { return false; }

        $uid= uniqid(rand(), true);

        $this->db->set('uid', $uid)
            ->set('name', $obj['name'])
            ->set('email', $obj['email'])
            ->insert('user');

        if ($this->db->affected_rows() == 1) { return true; }
        else { return false; }
    }
}