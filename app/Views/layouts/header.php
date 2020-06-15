<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <title>Geographic Information Systems</title>
    <meta content="Responsive admin theme build on top of Bootstrap 4" name="description" />
    <meta content="Themesdesign" name="author" />
    <link rel="shortcut icon" href="<?=base_url()?>/public/assets//images/favicon.ico">

    <link href="<?=base_url()?>/public/assets//css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="<?=base_url()?>/public/assets//css/metismenu.min.css" rel="stylesheet" type="text/css">
    <link href="<?=base_url()?>/public/assets//css/icons.css" rel="stylesheet" type="text/css">
    <link href="<?=base_url()?>/public/assets//css/style.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="<?=base_url()?>/public/map/css/leaflet.css">
    <link rel="stylesheet" href="<?=base_url()?>/public/map/css/L.Control.Locate.min.css">
    <link rel="stylesheet" href="<?=base_url()?>/public/map/css/qgis2web.css">
    <link rel="stylesheet" href="<?=base_url()?>/public/map/css/fontawesome-all.min.css">
    <link rel="stylesheet" href="<?=base_url()?>/public/map/css/leaflet-search.css">
    <link rel="stylesheet" href="<?=base_url()?>/public/map/css/leaflet-control-geocoder.Geocoder.css">

</head>

<body>

    <!-- Begin page -->
    <div id="wrapper">

        <!-- Top Bar Start -->
        <div class="topbar">

            <!-- LOGO -->
            <div class="topbar-left pt-4">
                <a style="line-height: 0; margin-top: 20px" href="<?=base_url()?>" class="logo">
                    <span  class="logo-light">
                        <i class="mdi mdi-camera-control"></i> GIS <br>
                        <span style="font-size: .4rem; line-height: 0"> kondisi jalan</span>
                    </span>
                    <span class="logo-sm">
                        <i class="mdi mdi-camera-control"></i>
                    </span>
                </a>
                <br>
            </div>

            <nav class="navbar-custom">
                <ul class="list-inline menu-left mb-0">
                    <li class="float-left">
                        <button class="button-menu-mobile open-left waves-effect">
                            <i class="mdi mdi-menu"></i>
                        </button>
                    </li>
                </ul>

            </nav>

        </div>
        <!-- Top Bar End -->

        <!-- ========== Left Sidebar Start ========== -->
        <div class="left side-menu">
            <div class="slimscroll-menu" id="remove-scroll">

                <!--- Sidemenu -->
                <div id="sidebar-menu">
                    <!-- Left Menu Start -->
                    <ul class="metismenu" id="side-menu">
                        <li class="menu-title">Menu</li>

                        <?php foreach ($menus as $key => $value) { ?>
                            <?php if($value['child']){ ?>
                                <li>
                                    <a href="javascript:void(0);" class="waves-effect"><span>
                                            <?=$value['label']?> <span class="float-right menu-arrow"><i
                                                    class="mdi mdi-chevron-right"></i></span> </span></a>
                                    <ul class="submenu">
                                        <?php foreach ($value['child'] as $key2 => $value2) { ?>
                                            <?php if($value2['child']){ ?>
                                                <li>
                                                    <a href="javascript:void(0);" class="waves-effect">
                                                    <span>
                                                            <?=$value2['label']?> <span class="float-right menu-arrow"><i
                                                                    class="mdi mdi-chevron-right"></i></span> </span></a>
                                                    <ul class="submenu">
                                                        <?php foreach ($value2['child'] as $key3 => $value3) { ?>
                                                            <li>
                                                                <a href="<?=base_url()?><?=$value3['url']?>">
                                                                    <span> 
                                                                        <?= $value3['label'] ?>
                                                                    </span>
                                                                </a>
                                                            </li>
                                                    <?php } ?>
                                                    </ul>
                                                </li>
                                            <?php } else{ ?>
                                                <li>
                                                    <a href="<?=base_url()?><?=$value2['url']?>">
                                                        <span> 
                                                            <?= $value2['label'] ?>
                                                        </span>
                                                    </a>
                                                </li>
                                            <?php } ?>
                                    <?php } ?>
                                    </ul>
                                </li>
                            <?php } else{ ?>
                            <li>
                                <a href="<?=base_url()?><?=$value['url']?>" class="waves-effect"><span> 
                                    <?= $value['label'] ?>
                                    </span></a>
                            </li>
                            <?php } ?>
                        <?php } ?>

                    </ul>

                </div>
                <!-- Sidebar -->
                <div class="clearfix"></div>

            </div>
            <!-- Sidebar -left -->

        </div>

        <div class="content-page">
            <!-- Start content -->
            <div class="content">
                <div class="container-fluid">
                    <div class="page-title-box">
                        <div class="row align-items-center">
                            <div class="col-sm-6">
                                <h4 class="page-title"><?=$title?></h4>
                            </div>
                        </div> <!-- end row -->
                    </div>
                    <!-- end page-title -->