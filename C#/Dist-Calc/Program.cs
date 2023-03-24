// Distance Calculator in C#


// Welcome
#nullable disable
Console.Clear();
Console.WriteLine("WELCOME TO THE DISTANCE CALCULATOR!");

// Input
Console.WriteLine("\nEnter x1 value: ");
double x1 = Convert.ToDouble(Console.ReadLine());

Console.WriteLine("Enter y1 value: ");
double y1 = Convert.ToDouble(Console.ReadLine());

Console.WriteLine("Enter x2 value: ");
double x2 = Convert.ToDouble(Console.ReadLine());

Console.WriteLine("Enter y2 value: ");
double y2 = Convert.ToDouble(Console.ReadLine());

// Process
double dist = Math.Sqrt(Math.Pow(x2 - x1, 2) + Math.Pow(y2 - y1, 2));

// Output
Console.WriteLine($"\nDistance between the two points is {dist}");