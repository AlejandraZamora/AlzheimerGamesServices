package 
		com.example.model;
	    
	    import javax.persistence.*;
	    import java.util.Calendar;
	    @Entity
	    @Table(name = "avanceJuegoCalculoss", schema = "application")
public class AvanceJuegoCalculos {
	public AvanceJuegoCalculos(){}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "avanceJuegoCalculos_id")
	private Long id;
		
	public Long getId() {
	return id;
	}
	
	public void setId(Long id) {
	this.id = id;
	}
@Column(name = "tiempoSegundos")
private Integer tiempoSegundos;

public Integer getTiempoSegundos() {
return tiempoSegundos;
}

public void setTiempoSegundos(Integer tiempoSegundos) {
this.tiempoSegundos = tiempoSegundos;
}
@Column(name = "numeroPreguntasIntentos")
private Integer numeroPreguntasIntentos;

public Integer getNumeroPreguntasIntentos() {
return numeroPreguntasIntentos;
}

public void setNumeroPreguntasIntentos(Integer numeroPreguntasIntentos) {
this.numeroPreguntasIntentos = numeroPreguntasIntentos;
}
@Column(name = "numeroPreguntasAciertos")
private Integer numeroPreguntasAciertos;

public Integer getNumeroPreguntasAciertos() {
return numeroPreguntasAciertos;
}

public void setNumeroPreguntasAciertos(Integer numeroPreguntasAciertos) {
this.numeroPreguntasAciertos = numeroPreguntasAciertos;
}
@Column(name = "porcentajeSumasResueltas")
private Integer porcentajeSumasResueltas;

public Integer getPorcentajeSumasResueltas() {
return porcentajeSumasResueltas;
}

public void setPorcentajeSumasResueltas(Integer porcentajeSumasResueltas) {
this.porcentajeSumasResueltas = porcentajeSumasResueltas;
}
@Column(name = "porcentajeRestasResueltas")
private Integer porcentajeRestasResueltas;

public Integer getPorcentajeRestasResueltas() {
return porcentajeRestasResueltas;
}

public void setPorcentajeRestasResueltas(Integer porcentajeRestasResueltas) {
this.porcentajeRestasResueltas = porcentajeRestasResueltas;
}
@Column(name = "porcentajeMultiplicacionesResueltas")
private Integer porcentajeMultiplicacionesResueltas;

public Integer getPorcentajeMultiplicacionesResueltas() {
return porcentajeMultiplicacionesResueltas;
}

public void setPorcentajeMultiplicacionesResueltas(Integer porcentajeMultiplicacionesResueltas) {
this.porcentajeMultiplicacionesResueltas = porcentajeMultiplicacionesResueltas;
}
@Column(name = "porcentajeDivisionesResueltas")
private Integer porcentajeDivisionesResueltas;

public Integer getPorcentajeDivisionesResueltas() {
return porcentajeDivisionesResueltas;
}

public void setPorcentajeDivisionesResueltas(Integer porcentajeDivisionesResueltas) {
this.porcentajeDivisionesResueltas = porcentajeDivisionesResueltas;
}
@Column(name = "nivelMaximoAlcanzado")
private Integer nivelMaximoAlcanzado;

public Integer getNivelMaximoAlcanzado() {
return nivelMaximoAlcanzado;
}

public void setNivelMaximoAlcanzado(Integer nivelMaximoAlcanzado) {
this.nivelMaximoAlcanzado = nivelMaximoAlcanzado;
}
@Column(name = "date")
private Calendar date;

public Calendar getDate() {
return date;
}

public void setDate(Calendar date) {
this.date = date;
}
        }
