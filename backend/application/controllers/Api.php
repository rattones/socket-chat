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

        $users= $this->ModelUser->get($uid);

        echo json_encode($users);
    }
    /**
     * add a new user
     * [by post]
	 * @param string $name 
	 * @param string $email 
     * @return json
     */
    public function addUser()
    {
		$user= $this->input->post();
		$response= $this->ModelUser->add($user);

        echo json_encode([$response]);
    }
    /**
     * authenticate an user by email
     * [by post]
	 * @param string $email 
     * @return json
     */
    public function authenticate() 
    {   
        $email= $this->input->post('email');
        $response= $this->ModelUser->authenticate($email);

        echo json_encode($response);
    }
    /**
     * send messager to chat socket
     * @return json
     */
    public function sendMessage()
    {
        $post= $this->input->post();
    }
}
