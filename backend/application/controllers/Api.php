<?php
/**
 * api controller
 */
class Api extends MY_Controller
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

        $this->response(200, $users);
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

        $this->response(200, [$user]);
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

        $this->response(200, $response);
    }
    /**
     * send messager to chat socket
     * @return json
     */
    public function sendMessage()
    {
        $post= $this->input->post();
        // notify all (socket)

        $this->response(200, $post);
    }
    /**
     * remove one user
     * [by post]
     * @param string $uid
     * @return json
     */
    public function deleteUser()
    {
        $post= $this->input->post();
        $response= $this->ModelUser->delete($post['uid']);

        $this->response(200, true);
    }
}
