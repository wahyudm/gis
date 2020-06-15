<?php
namespace App\Models;

use CodeIgniter\Model;

class BatuGajah extends BaseModel
{
    protected $table = 'tbl89';
    protected $primaryKey = 'no_segmen';
    public $_id;

    public function getDetail()
    {
        $model = new DetailAm();
        $data = $model->where("fk", $this->_id);
        return $data;
    }
}