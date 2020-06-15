<?php
$page = $_GET['page'] ? $_GET['page'] : 1;
?>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th style="text-align: center; width: 50px">No</th>
                                <th>Klasifikasi Kerusakan</th>
                                <th>Jenis Kerusakan</th>
                                <th>Tingkat kerusakan</th>
                                <th>Diameter</th>
                                <th>Dalam</th>
                                <th>Panjang</th>
                                <th>Luas Kerusakan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach($data as $key => $item) { ?>
                                <tr>
                                    <td style="text-align: center;"> <?= $key+1+(($page-1)*10) ?> </td>
                                    <td><?= $item['klasifikasi_kerusakan'] ?></td>
                                    <td><?= $item['jenis_kerusakan'] ?></td>
                                    <td><?= $item['tingkat_kerusakan'] ?></td>
                                    <td><?= $item['diameter'] ? $item['diameter']." M" : "-" ?></td>
                                    <td><?= $item['dalam'] ? $item['dalam']." M" : "-" ?></td>
                                    <td><?= $item['panjang'] ? $item['panjang']." M" : "-" ?></td>
                                    <td><?= $item['luas_kerusakan'] ? $item['luas_kerusakan']." M" : "-" ?></td>
                                </tr>
                            <?php } ?>
                        </tbody>
                    </table>
                </div>
                <?= $pager->links() ?>
            </div>
        </div>
    </div>
</div>