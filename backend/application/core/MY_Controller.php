<?php 
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * extending base controller to add new features to controller
 */
class MY_Controller extends CI_Controller
{
    /**
     * base constructor
     */
    public function __construct() 
    {
        parent::__construct();
    }
    /**
     * generating a http header to Rest API response
     * @param  int $code HTTP status code
     * @param  mixed $data 
     * @return json
     */
    public function response(int $code, $data)
    {
        $this->output->set_status_header($code)
            ->set_header('HTTP/1.1 200 OK')
            ->set_content_type('application/json', 'utf-8')
            ->set_output(json_encode($data));
        }
    }