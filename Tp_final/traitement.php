<?php
include 'connexion.php';

$emploi_nom=$_POST['nom'];
$emploi_prenom=$_POST['prenom'];
$emploi_date=$_POST['date_naiss'];
$emploi_technologie=$_POST['technos'];
$emploi_annee_exp=$_POST['annee_exp'];
$emploi_type=$_POST['gender'];
$emploi_date_fin=$_POST['date_de_fin'];


$sql = "INSERT INTO candidat (nom,prenom,date_naiss,technologie,annee_experience,type_contrat_date_fin_contrat)
VALUES ('$emploi_nom','$emploi_prenom','$emploi_date','$emploi_technologie','$emploi_annee_exp','$emploi_type','emploi_date_fin')";

if (mysqli_query($conn, $sql)) 
{
echo "New record created successfully";
?>
<SCRIPT LANGUAGE="JAVASCRIPT"> alert("Vous venez d'enregistrer M./Me <?php echo '$emploi_nom'; ?>"); </SCRIPT>
<?php
} else
{
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>
