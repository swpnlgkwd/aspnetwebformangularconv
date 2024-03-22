using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace QuadrantWebForm
{
    public partial class Address : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                this.dropDownAddressType.Items.Add("Select Address Type");
                this.dropDownAddressType.Items.Add("Home");
                this.dropDownAddressType.Items.Add("Work");


                this.drpDownCountry.Items.Add("Select Country");
                this.drpDownCountry.Items.Add("Canada");
                this.drpDownCountry.Items.Add("USA");
            }

        }

        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            lblResult.Text = "Address Type: " + dropDownAddressType.SelectedItem.ToString() + "<br/>";
            lblResult.Text += "Street: " + txtStreet.Text + "<br/>";
            lblResult.Text += "City: " + lstCity.SelectedItem.ToString() + "<br/>";
            lblResult.Text += "Province: " + drpDownProvince.SelectedItem.ToString() + "<br/>";
            lblResult.Text += "Country: " + drpDownCountry.SelectedItem.ToString() + "<br/>";
            lblResult.Text += "Postal Code: " + txtPostalCode.Text + "<br/>";
            lblResult.Text += "Mailing Address: " + (chkMailingAddress.Checked ? "Yes" : "No") + "<br/>";


        }
        protected void btnCancel_Click(object sender, EventArgs e)
        {
            // Redirect to the next page
            Response.Redirect("Default.aspx");
        }

        protected void dropDownCountry_SelectedIndexChanged(object sender, EventArgs e)
        {
            this.drpDownProvince.Items.Clear();
            if (drpDownCountry.SelectedIndex == 0)
            {
                Response.Write("Please select a country");
            }
            else if (drpDownCountry.SelectedItem.ToString() == "Canada")
            {
                this.drpDownProvince.Items.Add("Select Province");
                this.drpDownProvince.Items.Add("Ontario");
                this.drpDownProvince.Items.Add("British Columbia");
            }
            else if (drpDownCountry.SelectedItem.ToString() == "USA")
            {
                this.drpDownProvince.Items.Add("Select Province");
                this.drpDownProvince.Items.Add("California");
                this.drpDownProvince.Items.Add("New York");
            }
        }

        protected void dropDownProvince_SelectedIndexChanged(object sender, EventArgs e)
        {
            lstCity.Items.Clear();
            if (drpDownCountry.SelectedIndex == 0)
            {
                Response.Write("Please select a country");
            }
            else if (drpDownProvince.SelectedItem.ToString() == "Ontario")
            {
                this.lstCity.Items.Add("Toronto");
                this.lstCity.Items.Add("Otawa");
            }
            else if (drpDownProvince.SelectedItem.ToString() == "British Columbia")
            {
                this.lstCity.Items.Add("Vancouver");
                this.lstCity.Items.Add("Victoria");
            }
            else if (drpDownProvince.SelectedItem.ToString() == "California")
            {
                this.lstCity.Items.Add("Los Angeles");
                this.lstCity.Items.Add("San Francisco");
            }
            else if (drpDownProvince.SelectedItem.ToString() == "New York")
            {
                this.lstCity.Items.Add("New York City");
                this.lstCity.Items.Add("Buffalo");
            }
        }

    }
}