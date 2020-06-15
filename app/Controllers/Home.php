<?php 
namespace App\Controllers;

class Home extends BaseController
{
	public function index()
	{
		$this->layout = "main";
		$this->renderView('home/index', [
			'title' => "Halo"
		]);
	}
	public function map()
	{
		$this->renderView('home/map', [
			'title' => "Kondisi Jalan di Indragiri Hulu"
		]);
	}
	public function administrasi()
	{
		$this->renderView('home/map', [
			'title' => "Kondisi Jalan di Indragiri Hulu"
		]);
	}
	public function batuGajah()
	{
		$this->renderView('home/map', [
			'title' => "008.9 : Batu Gajah – Sei Karas"
		]);
	}
	public function pematang()
	{
		$this->renderView('home/85', [
			'title' => "008.5 : Pematang reba – Pekanheran"
		]);
	}
	public function airMolek()
	{
		$this->renderView('home/810', [
			'title' => "008.10 : Air Molek – Simpang Japura"
		]);
	}

}
