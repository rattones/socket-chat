<?php
/**
 * api controller
 */
class Api extends CI_Controller
{
    /**
     * parent constructor
     */
    public function __construct()
    {
        parent::__construct();
        // loading models
		$this->load->model('ModelUser');
    }
    /**
     * get user list
     * @param string $uid 
     * @return json
     */
    public function getUser(string $uid= null) 
    {
        $users= $this->ModelUser->list($uid);

        echo json_encode($users);
    }
    /**
     * add a new user
     * @return json
     */
    public function addUser()
    {
		$user= $this->input->post();
		$response= $this->ModelUser->add($user);

        echo json_encode([$response]);
    }
}
