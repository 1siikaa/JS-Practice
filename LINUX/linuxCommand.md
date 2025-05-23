whoami 
whereis <folder_name>
pwd
cd ~
mkdir <folder_name>
cd <folder_name>
touch <file_name>
cat <file_name>
cat ~ <file_name>
rmdir <empty_folder_name>
rmdir -r <empty_folder_name>
rm <file_name>
mv <file_name_which_you_want_to_move> <folder_name_or_destination_where_you_want_to_move_this_file_or_folder>
cp <file_name_which_you_want_to_move> <folder_name_or_destination_where_you_want_to_move_this_file_or_folder>
ls 
ls -l
ls -a
df => [shows how much memory consume by your system files in the current directory in bits and bytes]
df -h => [shows same in human readable form]
du => [disk usage command will show how much space is utilized by your system]
du -s <file_type> => du -s *.txt will show that file_type total distinct count with their names and respective amount of space.
passwd => [used to change the password]

count the word frequency case insensitively and remove punctuation frequency and convert it into a csv file which will be automatically created and stored after bash script execution.
---------------------------------------------------
tr -d '[:punct:]' < words.txt | \
tr '[:upper:]' '[:lower:]' | \
tr -s ' ' '\n' | \
sort | \
uniq -c | \
sort -nr | \
awk '{print $2 "," $1}' > word_frequency.csv
-----------------------------------------------------
1. tr -d '[:punct:]' < words.txt
	•	Purpose: Removes all punctuation characters (like ., ,, !, etc.) from the file words.txt.
	•	[:punct:] is a POSIX character class that matches all punctuation marks.
	•	This ensures that word. and word are treated as the same word.

2. tr '[:upper:]' '[:lower:]'
	•	Purpose: Converts all uppercase letters to lowercase.
	•	This ensures case insensitivity—so Word, word, and WORD are all counted as the same word.

3. tr -s ' ' '\n'
	•	Purpose: Translates (replaces) spaces with newlines, effectively placing each word on a separate line.
	•	-s squeezes repeated spaces into a single newline to avoid empty lines or duplicate entries caused by multiple spaces.

4. sort
	•	Purpose: Sorts the words alphabetically.
	•	This is necessary before using uniq to count identical words grouped together.

5. uniq -c
	•	Purpose: Counts the number of occurrences of each unique word.
	•	Output format: count word

6. sort -nr
	•	Purpose: Sorts the words numerically in reverse order, i.e., most frequent words first.
	•	-n: numeric sort, -r: reverse order.

7. awk '{print $2, $1}'
	•	Purpose: Formats the output to word count instead of the default count word from uniq -c.
