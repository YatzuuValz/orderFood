# Fungsi untuk mengecek apakah dua objek akan saling bertabrakan.
# Rincian argumen:
# - A_pos_x: Koordinat x awal objek pertama
# - A_pos_y: Koordinat y awal objek pertama
# - A_speed_x: Kecepatan objek pertama pada sumbu-x
# - A_speed_y: Kecepatan objek pertama pada sumbu-y
# - B_pos_x: Koordinat x awal objek kedua
# - B_pos_y: Koordinat y awal objek kedua
# - B_speed_x: Kecepatan objek kedua pada sumbu-x
# - B_speed_y: Kecepatan objek kedua pada sumbu-y
###############################################################################
# Fungsi ini sudah lengkap. Kamu hanya perlu menggunakannya dengan benar.
###############################################################################
def check_collision(A_pos_x, A_pos_y, A_speed_x, A_speed_y, \
                    B_pos_x, B_pos_y, B_speed_x, B_speed_y):

    if A_pos_x == B_pos_x and A_pos_y == B_pos_y:
        return True

    if A_speed_x == B_speed_x and A_speed_y == B_speed_y:
        return False

    delta_x = B_pos_x - A_pos_x
    delta_y = B_pos_y - A_pos_y
    speed_x = B_speed_x - A_speed_x
    speed_y = B_speed_y - A_speed_y

    if delta_x * speed_y != delta_y * speed_x:
        return False

    return ((delta_x > 0) != (speed_x > 0)) or \
           ((delta_y > 0) != (speed_y > 0))

# Fungsi untuk mengkonversi baris input dari user menjadi data yang bisa
# diproses oleh program.
def parse_input_line(line):
    #line BFG-6277|Asteroid|22000|1500|-1000|-200|200

    parts = line.split("|")
    #["BFG-6277","Asteroid","22000","1500",-100"0,-"200",200]



    # TODO: Perbaiki tipe data input (gunain type cast)
    nama = parts[0]
    jenis = parts[1]
    bobot = parts[2]
    x = int(parts[3])
    y = parts[4]
    dx = parts[5]
    dy = parts[6]



    objek = [nama, jenis, bobot, x, y, dx, dy]
    ["BFG-6277","Asteroid",22000,1500,-1000,-200,200]
    return objek

def death_ray(power):
    return f"dilenyapkan dengan death ray dengan daya {power} megawatt"

def repulsor(force):
    # TODO: Lengkapi fungsi ini
    return ""

# Fungsi ini akan dieksekusi ketika script dijalankan.
def main():

    # Input posisi awal kapal.
    print("Posisi kapal COSMIC:")
    ship_x = int(input("x="))
    ship_y = int(input("y="))

    # Input kecepatan awal kapal.
    ship_dx = int(input("Kecepatan kapal COSMIC dalam sumbu-x: "))
    ship_dy = 0 # Karena kapal hanya bergerak searah sumbu-x

    n = int(input("Banyaknya data: "))
    daftar_objek = []

    print(f"Masukkan {n} baris dengan format berikut: ")
    print("nama|jenis|bobot|x|y|dx|dy")

    for i in range(n):
        line = input() #line = BFG-6277|Asteroid|22000|1500|-1000|-200|200
        objek = parse_input_line(line)  #["BFG-6277","Asteroid",22000,1500,-1000,-200,200]
        # TODO: Masukkan objek ke daftar_objek
        daftar_objek.append(objek)

    print("Penanganan: ")
    for objek in daftar_objek:

        # Ambil data objek
        nama, jenis, bobot, x, y, dx, dy = objek

        will_collide = check_collision(ship_x, ship_y, ship_dx, ship_dy,
                                            x,      y,      dx,      dy)

        daftar_tindakan = []

        # Hitung daftar tindakan yang harus diambil
        # TODO: Lengkapi kondisi-kondisi yang diperlukan
        if not will_collide:
            daftar_tindakan.append("tidak perlu ditangani")
        elif jenis == "Kinetik":
            daftar_tindakan.append(death_ray(10))
        elif jenis == "Rudal":
            ...
            ...
        elif jenis == "Laser":
            ...
        elif jenis in ("Drone", "Kapal Musuh"):
            ...
            if jenis == "Kapal Musuh":
                ...
                ...
            else:
                ...
        elif jenis == "Asteroid":
            k = 2
            daya = bobot * k
            daftar_tindakan.append(death_ray(daya))
        elif jenis == "Rongsokan":
            ...
            ...
            ...
        else: # Handling jenis objek lainnya
            ...
            ...
            ...
        
        # penanganan = # TODO: Lengkapi baris ini

        # Cetak tindakan penanganan
        print(f"{nama} {penanganan}.")

# Jalankan fungsi main jika program dijalankan sebagai script
if __name__ == "__main__":
    main()
