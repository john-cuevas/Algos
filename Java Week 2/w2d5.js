/**
reference:
http://btv.melezinek.cz/binary-search-tree.html
 * Class to represent a Node in a Binary Search Tree (BST).
 * The properties in the constructor are how this node is 
 * connected to other nodes to form the tree. 
 * Similar to .next in a SinglyLinkedList except a BST node can
 * be connected to two other nodes. To start, new nodes are not
 * connected to any other nodes, these properties will be set 
 * after the new node is instantiated.
 */
class BSTNode { // TreeNode , node
    constructor(data) {
        this.data = data;
        this.left = null; // a BSTNode with a smaller value
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where 
 * the data of left nodes are <= to their parent and
 * the data of right nodes are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    printInorder(curr = this.root) {
        if (!curr) {
            return;
        }
        if (curr) {
            this.printInorder(curr.left);
            console.log(curr.data);
            this.printInorder(curr.right);
        }
    }

    printPreorder(curr = this.root) {
        if (!curr) {
            return;
        }
        if (curr) {
            console.log(curr.data);
            this.printInorder(curr.left);
            this.printInorder(curr.right);
        }
    }

    printPostorder(curr = this.root) {
        if (!curr) {
            return;
        }
        if (curr) {
            this.printInorder(curr.left);
            this.printInorder(curr.right);
            console.log(curr.data);
        }
    }

    /**
     * Recursively counts the total number of nodes in this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */
    size(node = this.root, count = 0) {
        if (!node) {
            return count;
        }
        if (node) {
            count += 1;
            count = this.size(node.left, count);// 5
            count = this.size(node.right, count); // 6 7 8 9
        }
        return count;
    }

    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    height(node = this.root, levelCount = 0, longest = 0) {
        if (!node) {
            if (levelCount > longest) {
                longest = levelCount;
            }
            levelCount = 0;
            return longest;
        }
        if (node) {
            //two calls to our function one for left and one for right
            levelCount += 1
            longest = this.height(node.left, levelCount, longest);
            longest = this.height(node.right, levelCount, longest);
        }
        return longest;
    }

    height2(node = this.root) {
        if (node == null) {
            return 0;
        }

        let left = this.height2(node.left)
        let right = this.height2(node.right)

        if (left > right) {
            return 1 + left;
        } else
            return 1 + right;

    }

    height1(node = this.root) {
        if (node == null) {
            return 0;
        }
        return 1 + Math.max(this.height1(node.left), this.height1(node.right))
    }

    /**
     * Determines if this tree is a full tree. A full tree is a tree where every
     * node has both a left and a right except for the leaf nodes (last nodes)
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {boolean} Indicates if this tree is full.
     */
    isFull(node = this.root, full = true) {
        if (!node) {
            return full;
        }
        if (node) {
            if ((!node.left && node.right) || (node.left && !node.right)) {
                full = false;
            }
            full = this.isFull(node.left, full);
            full = this.isFull(node.right, full);
        }
        return full;
    }


    // HELPER METHOD
    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }

    insert(newVal) {
        const node = new BSTNode(newVal);

        if (!this.root) {
            this.root = node;
            return this;
        }

        let current = this.root;

        while (true) {
            if (newVal <= current.data) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }

                current = current.left;
            } else {
                // newVal is greater than current.data
                if (current.right === null) {
                    current.right = node;
                    return this;
                }

                current = current.right;
            }
        }
    }



}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);
// oneNodeTree.print()

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);
//twoLevelTree.print()

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   8  13  20
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.insert(10)
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(8);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.right = new BSTNode(20);
threeLevelTree.root.right.left = new BSTNode(13);
// threeLevelTree.print()
/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/


const fullTree = new BinarySearchTree();
fullTree
    .insert(25)
    .insert(15)
    .insert(10)
    .insert(22)
    .insert(4)
    .insert(12)
    .insert(18)
    .insert(24)
    .insert(50)
    .insert(35)
    .insert(70)
    .insert(31)
    .insert(44)
    .insert(66)
    .insert(90);

twoLevelTree.print();
console.log();
console.log("testing size of two level tree should be 3");
console.log(twoLevelTree.size());
console.log();
console.log("testing height of two level tree should be 2");
console.log(twoLevelTree.height());
console.log("testing isFull of two level tree should be true");
console.log(twoLevelTree.isFull());
twoLevelTree.insert(4);
twoLevelTree.print();
console.log("testing isFull of edited two level tree should be false");
console.log(twoLevelTree.isFull());
console.log("testing height of edited two level tree should be 3");
console.log(twoLevelTree.height());

console.log();

fullTree.print();
console.log();
console.log("testing size of full tree should be 15");
console.log(fullTree.size());
console.log("testing height of full tree should be 4");
console.log(fullTree.height());
console.log("testing isFull of full tree should be true");
console.log(fullTree.isFull());
fullTree.insert(13);
fullTree.print();
console.log("testing isFull of edited full tree should be false");
console.log(fullTree.isFull());
console.log("testing height of edited full tree should be 5");
console.log(fullTree.height());