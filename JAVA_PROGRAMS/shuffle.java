/*In Java, "shuffling" an array or collection means randomly reordering the elements within the array or collection. The purpose of shuffling is to achieve a random or pseudo-random order of elements.
*/


import java.util.*;
public class Main
{
	public static void main(String[] args) {
	    
	    //create arrayList 
	   ArrayList<Integer> list=new ArrayList<>();
	   //enter values from keyboard
	   Scanner s=new Scanner(System.in);
	   //enter no of values
	   int n=s.nextInt();
	   for(int i=0;i<n;i++)
	   {
	   list.add(s.nextInt());
	   }
	  
	  //shuffle method in Collections
	   Collections.shuffle(list);
	   
	   //print shuffled List 
		System.out.println(list);
	}
}