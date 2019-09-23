# Data Structure and Algorithms Problems

> At least one problem a day, keeps your lazy brain away (Mostly weekdays) :P

| Day    | Total Problems  |
| :----: | :-------------: |
|  77    |      89        |

## Table of Contents

- [Array](#array)
- [Bit Manipulation](#bit-manipulation)
- [BackTracking](#backtracking)
- [Cache](#cache)
- [Concepts](./Concepts)
- [Hashing](#hashing)
- [In Place](#in-place)
- [Linked List](#linked-list)
- [Math](#math)
- [Numbers](#numbers)
- [Search](#search)
- [Stack and Queues](#stack-and-queues)
- [Strings](#strings)
- [Trees](#trees)
- [Two Pointer](#two-pointers)
- [Trie (Prefix Tree)](#trie)


## [Array](./Array)

| Date | Problems |     Solutions     |
| :------------: | :------------: | :----------: |
|Jan 05 2018 | Rearrange an array so that arr[i] becomes arr[arr[i]] with O(1) extra space (auxiliary space).| [Rearrange Array](Array/1.rearrange_array.js)|
|Jan 06 2018 | Given a list of non negative integers, arrange them such that they form the largest number.| [Largest Formed Number](Array/2.largest_number.js)|
|Jan 19 2018 | Flatten the given array.| [Flatten Multiple Level Array](Array/3.flatten_array.js)|
|Jan 24 2018 | Wave the given array.| [Wave Array](Array/4.wave_array.js)|
|Feb 21 2018 | Given an array and a value, remove all instances of that value in-place and return the new length.| [Remove Element](Array/5.remove_element.js)|
|Mar 08 2018 | Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal". | [Find Relative Winners](Array/6.find_relative_winners.js)|
|Mar 12 2018 | In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data. | [Reshape To Matrix](Array/7.reshape_matrix.js)|
|Mar 25 2018 | Given an array of integers of size ‘n’. Calculate the maximum sum of ‘k’ consecutive elements in the array. | [Max Sum Of K Elements](Array/8.max_k_elements_in_array.js)|
|Mar 28 2018 | Given an array of integers, every element appears twice except for one. Find that single one. | [Find Single Number](Array/9.single_number.js)|
|Mar 28 2018 | Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.) | [Area of Island (2D Array)](Array/10.area_of_island.js)|
|Mar 29 2018 | Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array. | [Find the Missing Number](Array/11.missing_number.js)|
|Apr 03 2018 | Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain. | [Distribute Candies](Array/12.distribute_candies.js)|
|Apr 05 2018 | Given a binary array, find the maximum number of consecutive 1s in this array. | [Max Consecutives Ones](Array/13.max_consecutives_ones.js)|
|Mar 14 2019 | Return the lowest index at which a value (second argument) i.e **num** should be inserted into an array (first argument). | [Where do i belong](Array/14.where_do_i_belong.js)|
|Mar 14 2019 | Find the container With most water. | [Water Container](Array/15.water_container.js)|
|Mar 15 2019 | Reverse Words in a String. | [Reverse Words in a String](Array/16.reverse_words.js)|
|Mar 26 2019 | Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die. | [Can Place Flowers](Array/17.flower_bed.js)|
|Apr 15 2019 | Given an array, rotate the array to the right by k steps, where k is non-negative.  | [Rotate Array](Array/18.rotate_array.js)|
|May 21 2019 | Given two arrays, write a function to compute their intersection.  | [Intersection of Two Arrays](Array/19.intersection_of_numbers.js)|
|Jun 25 2019 | Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.  | [Sort Array By Parity](Array/20.sort_by_parity.js)|
|Sep 10 2019 | Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. | [Find Duplicate Numbers](Array/21.find_duplicate_number.js)|
|Sep 23 2019 | Given a set of distinct integers, nums, return all possible subsets (the power set). | [Subsets](Array/22.subsets)|

## [Bit Manipulation](./Bit%20Manipulation)

| Date | Problems |     Solutions     |
| :------------: | :------------: | :----------: |
|Jan 11 2018 | Given a sorted array of integers, find the number of occurrences of a given target value (complexity should be O(number of ones). | [Number of 1 BitsBookmark](Bit%20Manipulation/1.number_of_1_bits.js)|
|Jan 11 2018 | Given a sorted array of integers, find the number of occurrences of a given target value (complexity should be O(number of ones). | [Sum Of Two Numbers](Bit%20Manipulation/2.sum_of_two_number.js)|

## [BackTracking](./BackTracking)

| Date | Problems |     Solutions     |
| :------------: | :------------: | :----------: |
|Mar 16 2019 | Given a 2D board and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. | [Word Search in 2D](BackTracking/1.word_search.js)|
|Apr 08 2019 | Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'. | [Surrounded Area in 2D](BackTracking/2. surrounded_area.js)|

## [Cache](./Cache)

| Date | Problems |     Solutions     |
| :------------: | :------------: | :----------: |
|Mar 13 2019 | Implement LRU cache. | [Implement LRU cache](Cache/1.lru_cache.js)|


## [Hashing](./Hashing)

| Date | Problems |     Solutions     |
| :------------: | :------------: | :----------: |
|Jan 29 2018 | Given an array of strings, return all groups of strings that are anagrams.| [Array of Anagrams](Hashing/1.array_of_anagrams.js)|
|Apr 09 2018 | International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on..| [Unique Morse Codes](Hashing/2.unique_morse_codes.js)|
|Mar 16 2019 | Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place. | [Set Matrix Zeros](Hashing/3.set_matrix_zeros.js)|
|Mar 27 2019 | Given an array of integers, return indices of the two numbers such that they add up to a specific target. | [Two Sum](Hashing/4.two_sum.js)|

## [In Place](./In%20Place)

| Date | Problems |     Solutions     |
| :------------: | :------------: | :----------: |
|Dec 2 2018 | Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent. | [Sort Colours](In%20Place/1.sort_colours.js)|


## [Linked List](./Linked%20List)

| Date | Problems |     Solutions     |
| :------------: | :------------: | :----------: |
|Jan 22 2018 | Reverse a linked list. Do it in-place and in one-pass. | [Reverse A Linked List](Linked%20List/1.reverse_a_linked_list.js)|
|Feb 12 2018 | Merge two sorted linked lists and return it as a new list. | [Merge Two Sorted Linked Lists Without Duplicates](Linked%20List/2.merge_two_linked_list_without_duplicates.js)|
|Feb 21 2018 | Merge two sorted linked lists and return it as a new list. | [Merge Two Sorted Linked Lists With Duplicates](Linked%20List/3.merge_two_linked_list_with_duplicates.js)|
|Feb 28 2018 | Given a linked list, determine if it has a cycle in it. | [Find if linked list is circular or not](Linked%20List/4.find_circular_linked_list.js)|
|Mar 07 2018 | Write a program to find the node at which the intersection of two singly linked lists begins. | [Intersection of two linked list](Linked%20List/5.intersection_of_two_inked_lists.js)|
|Mar 15 2018 | Sort a linked list in O(n log n) time using constant space complexity. | [Sort Linked List](Linked%20List/6.sort_linked_list.js)|
|Mar 22 2018 | Remove all elements from a linked list of integers that have value val. | [Remove elements in Linked List](Linked%20List/7.remove_val_linked_list.js)|
|Nov 19 2018 | Given a sorted linked list, delete all duplicates such that each element appear only once. | [Remove duplicates in Linked List](Linked%20List/8.remove_duplicates.js)|
|Mar 24 2018 | iven a binary tree, flatten it to a linked list in-place. | [Binary Tree to Linked List](Linked%20List/9.binary_tree_to_linked_list.js)|


## [Math](./Math)

| Date | Problems |     Solutions     |
| :------------: | :------------: | :----------: |
|Aug 29 2019 | Find the original price of a product before sales discount. | [Find original price](Numbers/1.find_original_price.js)|

## [Numbers](./Numbers)

| Date | Problems |     Solutions     |
| :------------: | :------------: | :----------: |
|Feb 26 2018 | Given a non-negative integer represented as a non-empty array of digits, plus one to the integer. | [Plus One](Numbers/1.plus_one.js)|
|Mar 04 2018 | Given a positive integer n and you can do operations as follow, n/2 if even and n - 1 or n + 1 if odd  | [Integer Replacement](Numbers/2.integer_replacement.js)|
|Nov 13 2018 | Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.  | [Majority Elements](Numbers/3.majority_elements.js)|
|Nov 28 2018 | Given an integer, write a function to determine if it is a power of three.  | [Power of 3](Numbers/4.power_of_3.js)|
|Feb 20 2019 | Count the number of prime numbers less than a non-negative number, n.  | [Count Primes](Numbers/5.count_primes.js)|
|Feb 25 2019 | Implement atoi which converts a string to an integer.  | [String To Number](Numbers/6.string_to_integer.js)|
|Mar 19 2019 | Write an algorithm to determine if a number is "happy".  | [Happy Number](Numbers/7.happy_numbers.js)|
|Mar 28 2019 | Find All Numbers Disappeared in an Array.  | [Find Disappeared in an Array](Numbers/8.find_disappearing_numbers.js)|
|Sep 09 2019 | A self-dividing number is a number that is divisible by every digit it contains.  | [Self Dividing Numbers](Numbers/9.self_dividing_numbers.js)|

## [Search](./Search)

| Date | Problems |     Solutions     |
| :------------: | :------------: | :----------: |
|Jan 08 2018 | Given a sorted array of integers, find the number of occurrences of a given target value (complexity should be O(log n). | [Count Element Occurence](Search/1.count_element_occurence.js)|
|Aug 21 2018 | Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. | [Search Insert Position](Search/2.search_insert_position.js)|
|Aug 29 2018 | Given an integer n, return the number of trailing zeroes in n!. | [Trailing Factorial Zeros](Search/3.trailing_factorial_zeros.js)|

## [Stack and Queues](./Stack%20and%20Queues)

| Date | Problems |     Solutions     |
| :------------: | :------------: | :----------: |
|Mar 22 2018 | Evaluate the value of an arithmetic expression in Reverse Polish Notation. | [Evaluate Reverse Polish Notation](Stack%20And%20Queues/1.evaluate_reverse_polish_notation.js)|
|Nov 12 2018 | Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. | [Design a stack](Stack%20And%20Queues/2.min_stack.js)|
|Nov 17 2018 | Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. | [Is Valid Parentheses](Stack%20And%20Queues/3.valid_parentheses.js)|
|Mar 11 2019 | Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. | [Daily Temperatures](Stack%20And%20Queues/4.daily_temperature.js)|
|Mar 21 2019 | Given a string "S" representing the initial state. S[i] = 'L', if the i-th domino has been pushed to the left; S[i] = 'R', if the i-th domino has been pushed to the right; S[i] = '.', if the i-th domino has not been pushed. Return a string representing the final stat | [Push Dominoes](Stack%20And%20Queues/5.push_dominoes.js)|

## [Strings](./Strings)

| Date | Problems |     Solutions     |
| :------------: | :------------: | :----------: |
|Jan 09 2018 | Write a function to find the longest common prefix string amongst an array of strings. | [Longest Common Prefix](Strings/1.longest_common_prefix.js)|
|Jan 10 2018 | Find if Given number is power of 2 or not (number can be greater than 2 ^ 64). | [Power of 2](Strings/2.power_of_2.js)|
|Feb 20 2018 | Given a positive integer, return its corresponding column title as appear in an Excel sheet. | [Excel Sheet Column Title](Strings/3.excel_sheet_column_title.js)|
|Feb 22 2018 | Given an array of strings, group anagrams together. | [Group Of Anagrams](Strings/4.group_of_anagrams.js)|
|Feb 26 2018 | Convert a non-negative integer to its english words representation. | [Number To Words](Strings/5.number_to_words.js)|
|Mar 21 2018 | You are given a string representing an attendance record for a student. The record only contains the following three characters: | [Students Attendance](Strings/6.students_attendance.js)|
|Mar 26 2018 | Given a string, that contains special character together with alphabets (‘a’ to ‘z’ and ‘A’ to ‘Z’), reverse the string in a way that special characters are not affected. | [String Reversal With Special Characters](Strings/7.string_reversal_without_changing_special.js)|
|Aug 23 2018 | Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string. | [Length Of Last Words](Strings/8.length_of_last_word.js)|
|Oct 30 2018 | Given a string, find the length of the longest substring without repeating characters. | [Find Longest SubString](Strings/9.longest_substr.js)|
|Nov 15 2018 | Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1. | [First Unique Character](Strings/10.first_uniq_char.js)|
|Nov 28 2018 | Implement strStr(). Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack. | [Implement strStr()](Strings/11.strStr.js)|
|Mar 24 2019 | Check whether two Strings are Anagram of each other. | [Check Anagram](Strings/12.check_if_two_string_are_anagram.js)|

## [Trees](./Trees)

| Date | Problems |     Solutions     |
| :------------: | :------------: | :----------: |
|Feb 05 2018 | Given a binary tree, find its maximum depth. | [Max Depth Of Tree](Trees/1.max_depth_of_tree.js)|
|Feb 08 2018 | Given a binary tree, find its minimum depth. | [Min Depth Of Tree](Trees/2.min_depth_of_tree.js)|
|Feb 27 2018 | Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. | [Find Second Minimum Node](Trees/3.find_second_minimum_node.js)|
|Mar 07 2018 | Given a binary tree, determine if it is height-balanced. | [Balanced Tree](Trees/4.is_balanced_tree.js)|
|Mar 22 2018 | Check if given binary tree is BST or not. | [Check Tree is BST](Trees/5.check_tree_is_bst.js)|
|Mar 23 2018 | Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST. | [Lowest Common Ancestor Of BST](Trees/6.lowest_common_ancestor_bst.js)|
|Mar 23 2018 | Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the BT. | [Lowest Common Ancestor Of BT](Trees/7.lowest_common_ancestor_bt.js)|
|Mar 25 2018 | Given two binary trees, write a function to check if they are the same or not. | [Same Tree Or Not](Trees/8.same_tree.js)|
|Mar 25 2018 | Given a binary trees, invert it. | [Invert Binary Tree](Trees/9.invert_binary_tree.js)|
|Mar 26 2018 | Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center). | [Symmetric Tree](Trees/10.symmetric_tree.js)|
|Aug 27 2018 | Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum. | [Has Path Sum](Trees/11.path_sum.js)|
|Mar 12 2019 | Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level). | [Level Order Traversal](Trees/12.level_order_traversal.js)|


## [Two Pointers](./Two%20Pointers)

| Date | Problems |     Solutions     |
| :------------: | :------------: | :----------: |
|Jan 18 2018 | Given 2 sorted arrays, find all the elements which occur in both the arrays. | [Intersection Of Sorted Arrays](Two%20Pointers/1.intersection_of_sorted_arrays.js)|
|Jan 30 2018 | Given a sorted array, remove the duplicates in place such that each element can appear atmost twice and return the new length. | [Remove Duplicates From Sorted Array](Two%20Pointers/2.remove_duplicate_from_array-2.js)|
|Feb 27 2018 | Given 2 arrays, find all the elements which occur in both the arrays without sorting. | [Intersection Of Unsorted Arrays](Two%20Pointers/3.intersection_of_unsorted_arrays.js)|
|Mar 19 2019 | Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string. | [Shortest Distance to a Character](Two%20Pointers/4.shortest_distance_to_char.js)|

## [Trie](./Trie)

| Date | Problems |     Solutions     |
| :------------: | :------------: | :----------: |
|Mar 12 2019 | Implement a trie with insert, search, and startsWith methods. | [Implement Trie](Trie/1.implement_trie_ds.js)|
