<script src="<?=base_url()?>/public/assets/js/jquery.min.js"></script>
        <script src="<?=base_url()?>/public/assets/js/bootstrap.bundle.min.js"></script>
        <script src="<?=base_url()?>/public/assets/js/metismenu.min.js"></script>
        <script src="<?=base_url()?>/public/assets/js/jquery.slimscroll.js"></script>
        <script src="<?=base_url()?>/public/assets/js/waves.min.js"></script>
  
        <script src="<?=base_url()?>/public/typed.min.js"></script>

        <!-- App js -->
        <script src="<?=base_url()?>/public/assets/js/app.js"></script>
        <script>
            var options = {
                strings: [
                    'Geographic Information Systems', 
                    'Information System of Road Conditions in Indragiri Hulu Regency',
                    'Sistem Informasi Kondisi Jalan di Kabupaten Indragiri Hulu'
                ],
                typeSpeed: 200,
                loop: "infinite"
            };

            var typed = new Typed('#typing', options);
            function toggleDetail(){
                $("#detail").toggleClass("show")
            }
        </script>
    </body>

</html>