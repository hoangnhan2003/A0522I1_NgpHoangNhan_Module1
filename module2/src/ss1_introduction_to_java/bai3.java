package ss1_introduction_to_java;

import java.util.Scanner;
public class bai3 {
    public static void main(String[] args) {
        int usd;
        Scanner scanner = new Scanner(System.in);
        System.out.println("nhap vao so tien");
        usd = scanner.nextInt();
        int vnd = 23000 * usd;
        System.out.println(vnd);
    }
}