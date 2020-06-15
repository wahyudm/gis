<?php
namespace App\Models;

use CodeIgniter\Model;

class AirMolek extends BaseModel
{
    protected $table = 'tbl810';
    protected $primaryKey = 'no_segmen';
    public $_id;

    public function getDetail()
    {
        $model = new DetailAm();
        $data = $model->where("fk", $this->_id);
        return $data;
    }
}