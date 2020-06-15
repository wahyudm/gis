<?php
namespace App\Controllers;

/**
 * Class BaseController
 *
 * BaseController provides a convenient place for loading components
 * and performing functions that are needed by all your controllers.
 * Extend this class in any new controllers:
 *     class Home extends BaseController
 *
 * For security be sure to declare any new methods as protected or private.
 *
 * @package CodeIgniter
 */

use CodeIgniter\Controller;

class BaseController extends Controller
{
	protected $layouts = [
		"default" => [
			"header" => "header",
			"footer" => "footer",
		],
		"main" => [
			"header" => "header_main",
			"footer" => "footer_main",
		]
	];
	protected $layout = "default";

	/**
	 * An array of helpers to be loaded automatically upon
	 * class instantiation. These helpers will be available
	 * to all other controllers that extend BaseController.
	 *
	 * @var array
	 */
	protected $helpers = [];

	/**
	 * Constructor.
	 */
	public function renderView(String $view, Array $params)
	{
		$type = 'default';
		$menus = [
			[
				"label" => "Map",
				"url" => "/map"
			],
			[
				"label" => "Peta",
				"url" => "#",
				"child" => [
					[
						"label" => "Batas Administrasi",
						"url" => "/batas-administrasi#9/-0.4834/102.5560"
					],
					[
						"label" => "Ruas Jalan",
						"url" => "#",
						"child" => [
							[
								"label" => "008.10 : Air Molek – Simpang Japura",
								"url" => "/ruas-jalan/air-molek#13/-0.3480/102.3197"
							],
							[
								"label" => "008.5 : Pematang Reba – Pekanheran",
								"url" => "/ruas-jalan/pematang-reba#13/-0.3480/102.3197"
							],
							[
								"label" => "008.9 : Batu Gajah – Sei Karas",
								"url" => "/ruas-jalan/batu-gajah#14/-0.3662/102.4537"
							],
						]
					],
				]
			],
			[
				"label" => "Segmen Jalan",
				"url" => "#",
				"child" => [
					[
						"label" => "008.10 : Air Molek – Simpang Japura",
						"url" => "/segmen-jalan/air-molek"
					],
					[
						"label" => "008.5 : Pematang Reba – Pekanheran",
						"url" => "/segmen-jalan/pematang-reba"
					],
					[
						"label" => "008.9 : Batu Gajah – Sei Karas",
						"url" => "/segmen-jalan/batu-gajah"
					],
				]
			],
			// [
			// 	"label" => "Ruas Jalan",
			// 	"url" => "#",
			// 	"child" => [
			// 		[
			// 			"label" => "008.10 : Air Molek – Simpang Japura",
			// 			"url" => "/"
			// 		],
			// 		[
			// 			"label" => "008.10 : Air Molek – Simpang Japura",
			// 			"url" => "ruas-jalan"
			// 		],
			// 		[
			// 			"label" => "008.9 : Batu Gajah – Sei Karas",
			// 			"url" => "ruas-jalan"
			// 		],
			// 	]
			// ],
			// [
			// 	"label" => "Segmen Jalan",
			// 	"url" => "#",
			// 	"child" => [
			// 		[
			// 			"label" => "Tabel (Detail)",
			// 			"url" => "#",
			// 			"child" => [
			// 				[
			// 					"label" => "Tabel (Detail)",
			// 					"url" => "/"
			// 				],
			// 			]
			// 		],
			// 	]
			// ],
		];
		echo view('layouts/'.$this->layouts[$this->layout]['header'], [
			'title' => $params['title'],
			'menus' => $menus
		]);
		echo view($view, $params);
		echo view('layouts/'.$this->layouts[$this->layout]['footer']);
	}
	public function initController(\CodeIgniter\HTTP\RequestInterface $request, \CodeIgniter\HTTP\ResponseInterface $response, \Psr\Log\LoggerInterface $logger)
	{
		// Do Not Edit This Line
		parent::initController($request, $response, $logger);

		//--------------------------------------------------------------------
		// Preload any models, libraries, etc, here.
		//--------------------------------------------------------------------
		// E.g.:
		// $this->session = \Config\Services::session();
	}

}
