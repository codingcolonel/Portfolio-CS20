// DICEROLL SIMULATOR IN C#
#nullable disable
Console.Clear();

// MAIN LOOP
while (true)
{
    // GET SERACH INPUT FROM USER
    Console.WriteLine("\nDice ROll Simulator Menu");
    Console.WriteLine("1. Roll Dice Once");
    Console.WriteLine("2. Roll Dice 5 Times");
    Console.WriteLine("3. Roll Dice 'n' Times");
    Console.WriteLine("4. Roll Dice until Snake Eyes");
    Console.WriteLine("5. Exit");
    Console.Write("Select an option (1-5): ");
    string selection = Console.ReadLine();

    // PROCESS INPUT
    if (selection == "1")
    {
        // ROLL DICE ONCE
        Random rnd = new Random();
        int dice1 = rnd.Next(1, 7);
        int dice2 = rnd.Next(1, 7);
        int sum = dice1 + dice2;
        Console.WriteLine($"{dice1},{dice2} (sum: {sum})");
    }
    else if (selection == "2")
    {
        // LOOP DICE ROLL 5 TIMES
        for (int i = 0; i < 5; i++)
        {
            Random rnd = new Random();
            int dice1 = rnd.Next(1, 7);
            int dice2 = rnd.Next(1, 7);
            int sum = dice1 + dice2;
            Console.WriteLine($"{dice1},{dice2} (sum: {sum})");
        }
    }
    else if (selection == "3")
    {
        // GET INPUT
        Console.Write("How many rolls would you like? ");
        int length = Convert.ToInt32(Console.ReadLine());

        // ROLL DICE SPECIFIED AMOUNT OF TIMES
        for (int i = 0; i < length; i++)
        {
            Random rnd = new Random();
            int dice1 = rnd.Next(1, 7);
            int dice2 = rnd.Next(1, 7);
            int sum = dice1 + dice2;
            Console.WriteLine($"{dice1},{dice2} (sum: {sum})");
        }
    }
    else if (selection == "4")
    {
        // Track how many rolls it takes
        int numRolls = 1;

        // First roll must be runn before loop due to reference issues
        Random rnd = new Random();
        int dice1 = rnd.Next(1, 7);
        int dice2 = rnd.Next(1, 7);
        int sum = dice1 + dice2;
        Console.WriteLine($"{dice1},{dice2} (sum: {sum})");

        while (sum != 2)
        {
            dice1 = rnd.Next(1, 7);
            dice2 = rnd.Next(1, 7);
            sum = dice1 + dice2;
            Console.WriteLine($"{dice1},{dice2} (sum: {sum})");
            numRolls += 1;
        }

        Console.WriteLine($"SNAKE EYES! It took {numRolls} rolls to get snake eyes.");
    }
    else if (selection == "5")
    {
        break;
    }
}

Console.WriteLine("Goodbye");
