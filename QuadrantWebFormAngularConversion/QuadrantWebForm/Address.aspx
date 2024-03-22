<%@ Page Title="About" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Address.aspx.cs" Inherits="QuadrantWebForm.Address" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
 <div class="address inline-controls">
        <asp:Label ID="lblAddress" runat="server" CssClass="fontClass" Text="ADDRESS" Font-Bold="True" ForeColor="#3333CC" />
        <div class="align-right">
            <asp:Button ID="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_Click" />
            <asp:Button ID="btnCancel" runat="server" Text="Cancel" OnClick="btnCancel_Click" />

        </div>
    </div>

    <div class="address">
        <div class="newRequestLabelClass">
            <asp:Label ID="lblNewLeaveRequest" runat="server" Text="NEW ADDRESS" Font-Bold="True" ForeColor="#3333CC" />
        </div>

        <div class="newaddressinfo">
            <asp:Table ID="Table1" runat="server" CellPadding="5" CellSpacing="5">
                <asp:TableRow>
                    <asp:TableCell>
                        <asp:Label ID="lblAddressType" runat="server" Text="Address Type:" />
                    </asp:TableCell>
                    <asp:TableCell>
                        <asp:DropDownList ID="dropDownAddressType" runat="server"></asp:DropDownList>
                    </asp:TableCell>
                </asp:TableRow>
                <asp:TableRow>
                    <asp:TableCell>
                        <asp:Label ID="lblStreet" runat="server" Text="Street" />
                    </asp:TableCell>
                    <asp:TableCell>
                        <asp:TextBox ID="txtStreet" runat="server" TextMode="MultiLine"></asp:TextBox>
                    </asp:TableCell>
                </asp:TableRow>
                <asp:TableRow>
                    <asp:TableCell>
                        <asp:Label ID="lblCountry" runat="server" Text="Country" />
                    </asp:TableCell>
                    <asp:TableCell>
                        <asp:DropDownList ID="drpDownCountry" Width="150px" AutoPostBack="true" runat="server" OnSelectedIndexChanged="dropDownCountry_SelectedIndexChanged"></asp:DropDownList>
                    </asp:TableCell>
                </asp:TableRow>
                <asp:TableRow>
                    <asp:TableCell>
                        <asp:Label ID="lblProvince" runat="server" Text="Province" />
                    </asp:TableCell>
                    <asp:TableCell>
                        <asp:DropDownList ID="drpDownProvince" Width="150px" AutoPostBack="true" runat="server" OnSelectedIndexChanged="dropDownProvince_SelectedIndexChanged"></asp:DropDownList>
                    </asp:TableCell>
                </asp:TableRow>
                <asp:TableRow>
                    <asp:TableCell>
                        <asp:Label ID="lblCity" runat="server" Text="City" />
                    </asp:TableCell>
                    <asp:TableCell>
                        <asp:ListBox ID="lstCity" Width="150px" runat="server"></asp:ListBox>
                    </asp:TableCell>
                </asp:TableRow>
                <asp:TableRow>
                    <asp:TableCell>
                        <asp:Label ID="lblPostalCode" runat="server" Text="Postal Code" />
                    </asp:TableCell>
                    <asp:TableCell>
                        <asp:TextBox ID="txtPostalCode" runat="server"></asp:TextBox>
                    </asp:TableCell>
                </asp:TableRow>
                <asp:TableRow>
                    <asp:TableCell> 
                    </asp:TableCell>
                    <asp:TableCell>
                        <asp:CheckBox ID="chkMailingAddress" runat="server" Text="Is Mailing Address" />
                    </asp:TableCell>
                </asp:TableRow>

            </asp:Table>
            <div class="address">
                <asp:Label ID="lblResult" runat="server" Text="Result"></asp:Label>
            </div>
        </div>
    </div>
</asp:Content>
