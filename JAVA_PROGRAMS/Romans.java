

import java.util.*;
public class Main
{
    public static int convert(String s)     //function 
    {
        Map<Character, Integer> map = new HashMap<>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);
         int sum=0;
	    for(int i=0;i<s.length();i++)
	    {
	        char c=s.charAt(i);
	        sum=sum+map.get(c);
	    }
	    
        return sum;
    }
	public static void main(String[] args) {
	    
	    Scanner s=new Scanner(System.in);
	    String st=s.s.next();            //string from user
	    System.out.println(convert(s)); //calling function 
	}
}