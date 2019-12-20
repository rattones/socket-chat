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
    public function get(string $uid= null) : array
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

        $uid= str_replace('.', '_', uniqid(rand(), true));

        $this->db->set('uid', $uid)
            ->set('name', $obj['name'])
            ->set('email', $obj['email'])
            ->insert('user');

        if ($this->db->affected_rows() == 1) { return true; }
        else { return false; }
	}
	/**
	 * authentica an user by email
	 * @param string $email
	 * @return array
	 */
	public function authenticate(string $email) : array 
	{
		$this->db->select()
			->from('user')
			->where('email', $email);
		
		$query= $this->db->get();

		return $query->result_array();
	}
    /**
     * delete one user
     * @param  string $uid
     * @return bool
     */
    public function delete(string $uid) : bool 
    {
        $this->db->where('uid', $uid)
                ->from('user')
                ->delete();

        return ($this->db->affected_rows() != 0);
    }
}
