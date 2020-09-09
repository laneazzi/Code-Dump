using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Program3
{
    public partial class Form1 : Form
    {
        static string bTod(String n) //Function to convert base.
        {
            String num = n;
            String a;
            int decVal = 0;

           
            int base1 = 1;

            int len = num.Length;
            for (int i = len - 1; i >= 0; i--)
            {
                if (num[i] == '1')
                    decVal += base1;
                base1 = base1 * 2;
            }
            a = decVal.ToString();
            return a;
        }
        public Form1()
        {
            InitializeComponent();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
           
        }

        private void textBox1_TextChanged_1(object sender, EventArgs e)
        {

            
           
        }

        private void Convert_Click(object sender, EventArgs e)
        {

           
            textBox2.Text = (bTod(textBox1.Text)); // Displays function result in a text box
        }

        private void button1_Click(object sender, EventArgs e)
        {
            

            
            {
                textBox1.Text = textBox1.Text + "0"; // User keypress 0
            }
        }

        private void n1_Click(object sender, EventArgs e)
        {
            if (textBox1.Text == null)
            {
                textBox1.Text = "1"; // User Keypress 1
            }
            else
            {
                textBox1.Text = textBox1.Text + "1";
            }
        }

        private void textBox1_TextChanged_2(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {
           textBox2.Text = (bTod(textBox1.Text));
        }
    }
}
