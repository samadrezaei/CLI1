mkdir ./shadi12
cd shadi12
touch blank.txt
 for i in 1 2 3 4 5;
do
echo -e "Hello\n">> greeting.txt
done

for i in 1 2 3 4 5;
do
cp greeting.txt $i.txt
done
echo "cat">>pets.txt
echo "dog">>pets.txt
echo "hamester">>pets.txt

echo "cat">> commands.txt
echo "ls">> commands.txt
echo "pwd">> commands.txt
cat pets.txt commands.txt | sort | uniq >> lovelyCommands.txt