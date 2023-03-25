// C# Quiz

// WELCOME
#nullable disable
Console.Clear();
Console.WriteLine("WELCOME TO THE C# QUIZ");

// SCORE VARIABLE
float score = 0;

// QUESTIONS
Console.WriteLine("\n1.What year did C# first appear");
Console.Write("Q1 Answer: ");
string q1ans = Console.ReadLine().ToLower();
if (q1ans == "2000")
{
    Console.WriteLine("Correct");
    score++;
}
else
{
    Console.WriteLine("Incorrect");
}

Console.WriteLine("\n2.True or false: C# is a dynamically typed language");
Console.Write("Q2 Answer: ");
string q2ans = Console.ReadLine().ToLower();
if (q2ans == "false" || q2ans == "f")
{
    Console.WriteLine("Correct");
    score++;
}
else
{
    Console.WriteLine("Incorrect");
}

Console.WriteLine("\n3.Who is the creator of C#");
Console.Write("Q3 Answer: ");
string q3ans = Console.ReadLine().ToLower();
if (q3ans == "anders hejlsberg" || q3ans == "anders")
{
    Console.WriteLine("Correct");
    score++;
}
else
{
    Console.WriteLine("Incorrect");
}

Console.WriteLine("\n4.True or false: Python, C# and Javascript are refered to as object-oriented languages");
Console.Write("Q4 Answer: ");
string q4ans = Console.ReadLine().ToLower();
if (q4ans == "true" || q4ans == "t")
{
    Console.WriteLine("Correct");
    score++;
}
else
{
    Console.WriteLine("Incorrect");
}

// CALCULATE PERCENTAGE
float percentage = score / 4 * 100;

// DISPLAY RESULTS
Console.WriteLine("\nYOUR RESULTS:");
Console.WriteLine($"{score} / 4 ({percentage}%)");

if (score == 0)
{
    Console.WriteLine("You need to study!");
}
else if (score == 1)
{
    Console.WriteLine("Better luck next time!");
}
else if (score == 2)
{
    Console.WriteLine("You can do better!");
}
else if (score == 3)
{
    Console.WriteLine("Good job!");
}
else
{
    Console.WriteLine("Perfect!");
}