// // Hello World
// Console.WriteLine("Hello, World!");



// // Hello User
#nullable disable

// Console.Write("Hello, What is your name? ");
// string userName = Console.ReadLine();

// Console.Write("Hello, What time of day is it? ");
// string timeOfDay = Console.ReadLine();

// Console.WriteLine($"\nHello {userName}! Have a great {timeOfDay}.");




// // Average Calculator

// // WELCOME
// Console.Clear();
// Console.WriteLine("Welcome to the Average Calculator.");

// // INPUT
// Console.Write("Write first number: ");
// double num1 = Convert.ToDouble(Console.ReadLine());

// Console.Write("Write second number: ");
// double num2 = Convert.ToDouble(Console.ReadLine());

// // PROCESS
// double average = (num1 + num2) / 3;

// // OUTPUT
// Console.WriteLine($"The average is: {average}");



// // KF Panda Characters

// // WELCOME
// Console.Clear();
// Console.WriteLine("Welcome to the Average Calculator.");

// // MAIN LOOP
// while (true)
// {
//     // GET SERACH INPUT FROM USER
//     Console.Write("\nWrite character name or quit: ");
//     string name = Console.ReadLine().ToLower();

//     // PROCESS INPUT
//     if (name == "po" || name == "dragon warrior" || name == "kung fu panda")
//     {
//         Console.WriteLine("Skadoosh!");
//     }
//     else if (name == "mr. ping")
//     {
//         Console.WriteLine("There is no secret ingredient");
//     }
//     else if (name == "master shifu" || name == "shifu")
//     {
//         Console.WriteLine("If you only do what you can do, you will never be more than who you are.");
//     }
//     else if (name == "quit")
//     {
//         break;
//     }
//     else
//     {
//         Console.WriteLine("Character not found");
//     }
// }

// Console.WriteLine("Goodbye");



// Coin Flip SIm
Console.Clear();

// Create random object
Random rnd = new Random();

// Loop ? times and get a random number
int headCount = 0;
int tailCount = 0;
for (int n = 1; n <= 1000; n++)
{
    int randNum = rnd.Next(1, 3);
    if (randNum == 1)
    {
        Console.WriteLine("Heads");
        headCount++;
    }
    else
    {
        Console.WriteLine("Tails");
        tailCount++;
    }
}

// Output results
Console.WriteLine($"Num Heads: {headCount} Num Tails: {tailCount}");