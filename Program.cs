/* Olanrewaju Ayedun
   9/1/2020
   Console app to calculate sum,average,min and max. 
*/

using System;

namespace Program2_Console_
{
    class Program
    {
        static void Main(string[] args)

        {
            int i, max, min, sum=0, avg;

            int[] arr = new int[3]; //Array to hold all entered values.

           // int[] aro = new int[3]; // Array to copy values.

           
            for (i = 0; i < 3;  i++)
            {
                Console.Write("Enter a number:");

                arr[i] = int.Parse(Console.ReadLine()); // Initialize array with current console input.
                
                //aro[i] = arr[i]; //Copy to savior array.Just 
                
                sum += arr[i]; // Sum= sum + current array value

                
                
            }

            max = arr[0];
            min = arr[0];



            for (i = 1; i < 3; i++) // Loop to find max and min
             {

                 if (arr[i] > max)
                     max = arr[i]; // Compare max ( 1st val in array) to current array value iteration, and change it accordingly.


                 if (arr[i] < min) 
                     min = arr[i]; //Compare min ( 1st val in array) to current array value iteration, and change it accordingly.


            }


            avg = sum / 3;  //Average of sum    


            Console.WriteLine();


            Console.Write("Sum= {0}", sum);// Display sum
            Console.WriteLine();

            Console.Write("Max= {0}", max);// Display max.
            Console.WriteLine();

            Console.Write("Min= {0}", min);// Display min.
            Console.WriteLine();

            Console.Write("Average= {0}", avg);// Display average.

            Console.ReadKey();








        }
    }
}
