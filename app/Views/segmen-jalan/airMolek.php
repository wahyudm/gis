<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th style="text-align: center; width: 50px">No Segmen</th>
                            <th>Jumlah Kerusakan</th>
                            <th>Keterangan</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach($data as $key => $item) { ?>
                            <tr>
                                <td style="text-align: center;"> <?= $item['no_segmen'] ?> </td>
                                <td><?= $item['jumlah_kerusakan'] ?></td>
                                <td>
                                    <?php if($item['jumlah_kerusakan'] > 0){ ?> 
                                    <a href="<?=base_url('segmen-jalan/'.$route.'/'.$item['no_segmen'])?>" class="btn btn-light">Detail</a> 
                                    <?php } ?>
                                </td>
                            </tr>
                        <?php } ?>
                    </tbody>
                </table>
                <?= $pager->links() ?>
            </div>
        </div>
    </div>
</div>