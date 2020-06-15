<?php 
namespace App\Controllers;

use App\Models\AirMolek;
use App\Models\BatuGajah;
use App\Models\DetailAm;
use App\Models\DetailBg;
use App\Models\DetailPr;
use App\Models\PematangReba;

class TableController extends BaseController
{
	public function airMolek()
	{
        $model = new AirMolek();
        $data = $model->findAll();
		$this->renderView('segmen-jalan/airMolek', [
            'title' => "Segmen Jalan - Air Molek",
            'data' => $model->paginate(10),
            'route' => 'air-molek',
            'pager' => $model->pager
		]);
	}
	public function detailAirMolek($id)
	{
        $model = new DetailAm();
        $data = $model->where("fk", $id)->paginate(10);

		$this->renderView('segmen-jalan/detailAm', [
            'title' => "Segmen Jalan - Detail Air Molek No Segmen ".$id,
            'data' => $data,
            'pager' => $model->pager
		]);
	}
	public function pematangReba()
	{
        $model = new PematangReba();
        $data = $model->findAll();
		$this->renderView('segmen-jalan/airMolek', [
            'title' => "Segmen Jalan - Pematang Reba",
            'data' => $model->paginate(10),
            'route' => 'pematang-reba',
            'pager' => $model->pager
		]);
	}
	public function detailPr($id)
	{
        $model = new DetailPr();
        $data = $model->where("fk", $id)->paginate(10);

		$this->renderView('segmen-jalan/detailAm', [
            'title' => "Segmen Jalan - Detail Pematang Reba No Segmen ".$id,
            'data' => $data,
            'pager' => $model->pager
		]);
	}
	public function batuGajah()
	{
        $model = new BatuGajah();
        $data = $model->findAll();
		$this->renderView('segmen-jalan/airMolek', [
            'title' => "Segmen Jalan - Batu Gajah",
            'data' => $model->paginate(10),
            'route' => 'batu-gajah',
            'pager' => $model->pager
		]);
	}
	public function detailBg($id)
	{
        $model = new DetailBg();
        $data = $model->where("fk", $id)->paginate(10);

		$this->renderView('segmen-jalan/detailAm', [
            'title' => "Segmen Jalan - Detail Batu Gajah No Segmen ".$id,
            'data' => $data,
            'pager' => $model->pager
		]);
	}

}
