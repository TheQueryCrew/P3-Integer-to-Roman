
import java.util.*;

class Main {
	public static void main (String[] args) {
		int num=152;
		
		//here we keep dividing the number by relevant numbers 
		//passing the remainder of number with relevant number to function convert
		
		convert(num,1000,'M');
		num%=1000;
		convert(num,500,'D');
		num%=500;
		convert(num,100,'C');
		num%=100;
		convert(num,50,'L');
		num%=50;
		convert(num,10,'X');
		num%=10;
		convert(num,5,'V');
		num%=5;
		convert(num,1,'I');
	}
	
	static void convert(int num,int n,char c){
	    if(num==4){
	        System.out.print("IV");
	        return;
	    }
	    else if(num==9){
	        System.out.print("IX");
	        return;
	    }
	    int div=num/n;
	    
	    //we'll print the given character div number of times
	    for(int i=1;i<=div;i++){
	        System.out.print(c);
	    }
	    return;
	}
}
