function kirimData () {
      var name = document.getElementById("nama").value
      var paket = document.querySelector("input[name=paket]:checked").value
      var alamat = document.getElementById("alamat").value
      var e = document.getElementById("tribun");
      var value = e.value;
      var tribun = e.options[e.selectedIndex].text;
      var date = document.getElementById("tanggal").value;

      alert(
            "Nama : " + name +
            "\nTanggal Lahir : " + date +
            "\nTribun : " + tribun +
            "\nPaket : " + paket +
            "\nAlamat : " + alamat 
      )
}